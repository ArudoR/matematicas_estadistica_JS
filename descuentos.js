const inputPrice = document.querySelector('#price')
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular')
const pResult = document.querySelector('#result')

btn.addEventListener('click', calcularPrecioConDescuento)

const arrayUObjeto = undefined //['Cupones': descuento]{}?

function calcularPrecioConDescuento(){
    // (P * (100-D)) / 100

    const couponsObj = {
        'ArudoR': 30,
        'Descuent0': 25,
        'Copymark': 15
    }

    const price = Number(inputPrice.value)
    const coupon = inputCoupon.value

    if (!price || !coupon) {
        pResult.innerText = `Por favor llena el formulario`
        return
    }

    let discount

    if (couponsObj[coupon]) {
        discount = couponsObj[coupon]
    } else {
        pResult.innerText = 'El cupón no es válido'
        return
    }

    // switch (coupon) {
    //     case 'ArudoR':
    //         discount = 30;
    //         break;
        
    //     case 'Descuent0':
    //         discount = 25;
    //         break;

    //     default:
    //         pResult.innerText = 'El cupón no es válido'
    //         return
    // }

    // if (coupon == 'ArudoR') {
    //     discount = 30;
    // } else if (coupon == 'Descuent0') {
    //     discount = 25;
    // }else{
    //     pResult.innerText = 'El cupón no es válido'
    //     return
    // }

    console.log({price, discount});

    const newPrice = (price *(100 - discount))/100

    pResult.innerText = `El nuevo precio con descuento es: ${newPrice}`
}