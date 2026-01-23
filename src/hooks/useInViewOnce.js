import { useEffect, useRef, useState } from 'react'

function useInViewOnce({ threshold = 0.4, root = null, rootMargin = '0px' } = {}) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element || isVisible) {
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold, root, rootMargin }
        )

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    }, [isVisible, threshold, root, rootMargin])

    return { ref, isVisible }
}

export default useInViewOnce
