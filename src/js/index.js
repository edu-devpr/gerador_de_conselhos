/* document
    .querySelector(`.btn`).addEventListener(`click`, () => {

    })
document
    .querySelector(`.titulo-do-conselho`)
document
    .querySelector(`.informacao-do-conselho`)
 */

async function conselhos() {
    const url = `https://api.adviceslip.com/advice`
    const result = await fetch(url)
    return await result.json()

}

conselhos()

async function idPorConselho() {
    const conselhosGerador = await gerandoConselhos()
    console.log(conselhosGerador);

    const url = `https://api.adviceslip.com/advice/{slip_id}`

}

idPorConselho()




