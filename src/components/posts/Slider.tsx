import { createEffect, createSignal, onCleanup, onMount, type Accessor, type Setter } from "solid-js"

// todo: make after text cut off
export function Slider({ playSignal = createSignal(true) }: { playSignal: [Accessor<boolean>, Setter<boolean>] }) {
    const beforeText = new Image()
    beforeText.src = "/before.png"

    const afterText = new Image()
    afterText.src = "/after.png"

    let beforeIMG: HTMLImageElement | undefined, afterIMG: HTMLImageElement | undefined;

    const beforeIMGsrc = `/vasesHighlighterRed-before.webp`
    const afterIMGsrc = `/vasesHighlighterRed-after.webp`

    function checkAndFetchImages() {
        const img1 = new Image()
        img1.src = beforeIMGsrc
        img1.onload = () => beforeIMG = img1

        const img2 = new Image()
        img2.src = afterIMGsrc
        img2.onload = () => afterIMG = img2
    }
    checkAndFetchImages()

    createEffect(
        checkAndFetchImages
    )

    const [playSlider, setPlaySlider] = playSignal

    let canvas!: HTMLCanvasElement;
    let slider!: HTMLInputElement;
    let percentage = 0.5

    function draw() {
        if (canvas == undefined) return

        if (beforeIMG == undefined || afterIMG == undefined) {
            return
        }

        canvas.width = beforeIMG.width
        canvas.height = beforeIMG.height + 60

        const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d")
        if (ctx == null) {
            console.log("null ctx")
            return
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);


        ctx.drawImage(
            afterIMG,
            afterIMG.width * (percentage), 0, afterIMG.width * (1-percentage), afterIMG.height,
            afterIMG.width * (percentage), 0, afterIMG.width * (1-percentage), afterIMG.height
        )

        ctx.drawImage(
            afterText,
            canvas.width - afterText.width, beforeIMG.height
        )

        ctx.drawImage(
            beforeIMG,
            0, 0, beforeIMG.width * percentage, beforeIMG.height,
            0, 0, beforeIMG.width * percentage, beforeIMG.height
        )

        ctx.drawImage(
            beforeText,
            0, 0, canvas.width * percentage, canvas.height,
            0, beforeIMG.height, canvas.width * percentage, canvas.height,
        )
    }

    let dead = false

    onCleanup(() => dead = true)
    onMount(() => setPlaySlider(true))

    let t = 0
    let direction = 0
    function thing() {
        if (dead) return
        checkAndFetchImages()
        if (playSlider()) {
            t += 1 / 64
            percentage = (((Math.sin(t))) + 1) / 2
            direction = Math.cos(t)
            if (slider) slider.value = String(percentage)
        }
        draw()
        requestAnimationFrame(thing)
    }
    thing()

    function updateTfromProportion(percent: number) {
        t = Math.asin((percent * 2) - 1)

        if (direction < 0) {
            t = (Math.PI) - t
        }
    }

    const imageDrag = (event: MouseEvent & { currentTarget: HTMLCanvasElement; target: Element }) => {
        var rect = canvas.getBoundingClientRect();

        const x = event.clientX - rect.left

        const percent = x / rect.width
        updateTfromProportion(percent)

        percentage = Math.round(percent * 100) / 100

        slider.value = String(percent)
    }

    let drag = false

    return <div class="object-contain mx-auto w-96 p-4 py-2.5 flex flex-col justify-center items-center max-h-full max-w-full bg-stone-600 border-4 border-stone-800 rounded-2xl" onclick={() => setPlaySlider(false)}>
        <canvas
            ref={canvas}
            class="max-h-preview max-w-full object-contain mx-auto"
            onMouseDown={
                (event) => {
                    setPlaySlider(false)
                    drag = true
                    imageDrag(event)
                }
            }
            onMouseMove={
                (event) => {
                    if (drag) {
                        setPlaySlider(false)
                        imageDrag(event)
                    }
                }
            }
            onMouseUp={
                () => drag = false
            }
            onMouseLeave={
                () => drag = false
            }
        />
        <input class="mt-2 w-full block slider accent-blue-600" type="range" min="0" max="1" value="0.5" step="0.001" ref={slider} oninput={
            (event) => {
                setPlaySlider(false)
                percentage = Number(event.target.value)
                updateTfromProportion(percentage)

                draw()
            }
        }>
        </input>
    </div>
}