    const modal=document.querySelector('.modal')
    const button1=document.querySelector("#button1")
    const button2=document.querySelector("#button2")
    const button3=document.querySelector("#button3")
    const src1=document.querySelector(".card-1")
    const src2=document.querySelector(".card-2")
    const src3=document.querySelector(".card-3")

    const close=document.querySelector('.modal__content__close')

    button1.addEventListener("click", () => {
        modal.classList.remove("hidden")
        modal.classList.add("visible")
        src1.src="https://www.xiaomiadictos.com/wp-content/uploads/2020/08/redmi9prime.png"
        src2.src="https://www.xiaomiadictos.com/wp-content/uploads/2020/08/redmi9global.png"
        src3.src="https://lh3.googleusercontent.com/proxy/NOqMs4Lmf01O4i70ulmsHrZqsNO8qbvijSLLb8LKCyiynkWxSNMTNM1eW8T6arCO7ijcvLUQ0VVICkSdu1DN17gfNpSNlxavkkpZIvPlUm8bO1qqIS0kFUtONjX7bT9U44lE561A"

    })

    button2.addEventListener("click", () => {
        modal.classList.remove("hidden")
        modal.classList.add("visible")
        src1.src="https://images.samsung.com/is/image/samsung/pe-galaxy-a30s-a307-no-dtv-sm-a307gzkmpeo-back-thumb-303565359?$320_320_PNG$"
        src2.src="https://images.samsung.com/is/image/samsung/latin-galaxy-note10-n970-sm-n970fzsjtpa-backauraglow-thumb-182902435?$PF_PRD_B2B_PNG$"
        src3.src="https://invercomes.com.co/wp-content/uploads/2020/09/celular-a10s.png"

    })

    button3.addEventListener("click", () => {
        modal.classList.remove("hidden")
        modal.classList.add("visible")
        src1.src="https://cdn.shopify.com/s/files/1/0877/3052/products/iphone11-red-select-2019_a5b90d45-b23a-4083-ae94-6a91547ee2b4_1024x1024@2x.png?v=1586118579"
        src2.src="https://celularess.com/wp-content/uploads/2019/12/Apple-iPhone-8-600x600.png"
        src3.src="https://celularess.com/wp-content/uploads/2020/12/Apple-iPhone-12-600x600.png"

    })

    close.addEventListener("click", () => {
        modal.classList.remove("visible")
        modal.classList.add("hidden")})

