const Loader = () => {
    const divLoader = document.createElement('div')
    divLoader.classList.add('loader')
    
    const divStubic1 = document.createElement('div')
    divStubic1.classList.add('stubic')
    divStubic1.classList.add('stubic1')

    const divStubic2 = document.createElement('div')
    divStubic2.classList.add('stubic')
    divStubic2.classList.add('stubic2')

    const divStubic3 = document.createElement('div')
    divStubic3.classList.add('stubic')
    divStubic3.classList.add('stubic3')

    const divStubic4 = document.createElement('div')
    divStubic4.classList.add('stubic')
    divStubic4.classList.add('stubic4')

    const divStubic5 = document.createElement('div')
    divStubic5.classList.add('stubic')
    divStubic5.classList.add('stubic5')

    divLoader.append(divStubic1, divStubic2, divStubic3, divStubic4, divStubic5)
    return divLoader
}
export default Loader
