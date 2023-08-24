const vitalsURL = "https://vitals.vercel-analytics.com/v1/vitals";

const getConnectionSpeed = (): string =>
  ("connection" in navigator &&
    typeof navigator.connection === "object" &&
    navigator.connection &&
    "effectiveType" in navigator.connection &&
    typeof navigator.connection.effectiveType === "string" &&
    navigator.connection.effectiveType) ||
  "";

type Options = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: { [s: string]: any } | ArrayLike<any>;
  path: string;
  analyticsID: string;
  debug?: boolean;
};

const sendToAnalytics = (metric: Metric, options: Options) => {
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path
  );

  const body = {
    dsn: options.analyticsID,
    id: metric.id,
    page,
    href: location.href,
    event_name: metric.name,
    value: metric.value.toString(),
    speed: getConnectionSpeed(),
  };

  if (options.debug) console.log("[Web Vitals]", metric.name, JSON.stringify(body, null, 2));

  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: "application/x-www-form-urlencoded",
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsURL, blob);
  } else {
    fetch(vitalsURL, { body: blob, method: "POST", credentials: "omit", keepalive: true });
  }
};

export const webVitals = (options: Options) => {
  try {
    const { onCLS, onFCP, onFID, onLCP, onTTFB, type Metric } = await import("web-vitals");
    onFID((metric) => sendToAnalytics(metric, options));
    onTTFB((metric) => sendToAnalytics(metric, options));
    onLCP((metric) => sendToAnalytics(metric, options));
    onCLS((metric) => sendToAnalytics(metric, options));
    onFCP((metric) => sendToAnalytics(metric, options));
  } catch (err) {
    console.error("[Web Vitals]", err);
  }
};
