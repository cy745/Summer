function debounceBlackBox(start, end, delay = 500) {
    let timer = null

    return {
        debounce: () => {
            timer == null && start instanceof Function ? start() : clearTimeout(timer)
            timer = setTimeout(() => {
                if (end instanceof Function) end()
                timer = null
            }, delay)
        },
    }
}

export default {
    debounceBlackBox
}