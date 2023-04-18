// We need a consistent key to store and retrieve the RootObserver in the context. An empty object
// works perfectly. Exporting it here means the exact same object can be imported by both
// IntersectionObserver and RootIntersectionObserver, and no component can use the RootObserver in
// the context without importing this key explicitly.

export default {};
