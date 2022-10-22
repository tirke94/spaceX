import { getAllLaunches, getSingleLaunch, getLaunchYear } from '../services'
import Launch from './components/Launch'
import Loader from './components/Loader'

const divApp = document.querySelector('.launch_row')
const allLaunches = document.querySelector('#all_launches')
const singleLaunch = document.querySelector('#single_launch')
const launchesPerYear = document.querySelector('#launches_per_year')
const inputSingleLunch = document.querySelector('#single')
const selectYear = document.querySelector('#year')
const pGreska = document.querySelector('.greska')
const pGreska2 = document.querySelector('.greska2')
const singleLaunchForm = document.querySelector('.singleLaunchForm')
const launchesPerYearForm = document.querySelector('.launches_per_yearForm')
const btnSingle = document.querySelector('#singleLaunchForm')
const btnYear = document.querySelector('#launches_per_yearForm')
const ispis = document.querySelector('.form')



singleLaunchForm.style.zIndex = '0'
launchesPerYearForm.style.zIndex = '0'
singleLaunchForm.style.height = '0'
launchesPerYearForm.style.height = '0'

singleLaunch.addEventListener('click', () => {
    divApp.textContent = ''
    singleLaunchForm.style.opacity = '1'
    launchesPerYearForm.style.opacity = '0'
    singleLaunchForm.style.zIndex = '1'
    singleLaunchForm.style.height = '300px'
})
btnSingle.addEventListener('click', () => {
    singleLaunchForm.style.opacity = '0'
    if (inputSingleLunch.value === '') {
        pGreska.style.opacity = '1'
        inputSingleLunch.style.borderColor = '#ff0000'
        setTimeout(() => {
            pGreska.style.opacity = '0'
            inputSingleLunch.style.borderColor = '#ffffff'
        }, 2000)
        return
    }
    divApp.textContent = ''
    divApp.appendChild(Loader())
    getSingleLaunch(inputSingleLunch.value).then(response => {
        divApp.textContent = ''
        divApp.appendChild(Launch(response.data))

    })
    inputSingleLunch.value = ''
})



allLaunches.addEventListener('click', () => {
    divApp.textContent = ''
    launchesPerYearForm.style.opacity = '0'
    singleLaunchForm.style.opacity = '0'
    launchesPerYearForm.style.zIndex = '0'
    launchesPerYearForm.style.height = '0'
    ispis.style.height = '0'
    divApp.appendChild(Loader())
    getAllLaunches().then(response => {
        const allLaunchesNiz = response.data.filter(element => element.links.mission_patch !== null)
        divApp.textContent = ''
        allLaunchesNiz.forEach((element, index) => {
            if (Launch(element) !== undefined)
            divApp.appendChild(Launch(element, index))
        })
    })
})



launchesPerYear.addEventListener('click', () => {
    divApp.textContent = ''
    const loader = Loader()
    ispis.appendChild(loader)
    getAllLaunches().then(response => {
        const sveGodina = response.data.map(el => el.launch_year)
        for(let j = 0; j < sveGodina.length; j++) {
            let provera = false
            for(let i = 0; i < j; i++){
                if(sveGodina[j] == sveGodina[i]){
                    provera = true
                    break
                }
            }
            if(provera){
                sveGodina.splice(j, 1)
                j--
            }
        }
        // console.log(sveGodina);
        selectYear.textContent = ''
        const opcija = document.createElement('option')
        opcija.value = "Chose year"
        opcija.textContent = "Chose year"
        opcija.setAttribute('disabled', '')
        opcija.setAttribute('selected', '')
        selectYear.appendChild(opcija)
        sveGodina.forEach(el => {
            const opcija = document.createElement('option')
            opcija.value = el
            opcija.textContent = el
            selectYear.appendChild(opcija)
        })
        ispis.removeChild(loader)
        singleLaunchForm.style.opacity = '0'
        launchesPerYearForm.style.opacity = '1'
        launchesPerYearForm.style.zIndex = '1'
        launchesPerYearForm.style.height = '300px'
    })
})

btnYear.addEventListener('click', () => {
    if (selectYear.value === "Chose year") {
        pGreska2.style.opacity = '1'
        selectYear.style.borderColor = '#ff0000'
        setTimeout(() => {
            pGreska2.style.opacity = '0'
            selectYear.style.borderColor = '#ffffff'
        }, 2000)
        return
    }
    divApp.textContent = ''
    divApp.appendChild(Loader())
    getLaunchYear(selectYear.value).then(response => {
        divApp.textContent = ''
        response.data.forEach((element, index) => {
            divApp.appendChild(Launch(element, index))
        })
    })
    selectYear.value = "Chose year"
})
