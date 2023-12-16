import { expect, test } from  "@playwright/test";

test("Frames handling concept", async ({ page }) => {
    await page.goto("https://letcode.in/frame")

    
        const frame = page.frame({ name: "firstFr" });
        // frame?.fill("")
        if (frame != null) {
            await frame.fill("input[name='fname']", "Koushik");
            await frame.fill("input[name='lname']", "Chatterjee");

            // inner frame
            const frames = frame.childFrames();
            console.log('No. of inner frames: ' + frames.length);
            if (frames != null)
            await frames[0].fill("input[name='email']", "koushik@mail.com")
            else {
                console.log("Wrong frame");
            }
            const parent = frames[0].parentFrame()
            await frame.fill("input[name='lname']", "Letcode");
            await parent?.fill("input[name='lname']", "Youtube");
        } else throw new Error("No such frame")
        await page.waitForTimeout(30000);

    })




