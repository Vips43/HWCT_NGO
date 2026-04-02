import { useInView } from 'react-intersection-observer';

function LazySection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "200px 0px",
  });
  return (
    <div ref={ref} style={{ minHeight: "100px" }}>
      {inView ? children : null}
    </div>
  );
}

export default LazySection;
