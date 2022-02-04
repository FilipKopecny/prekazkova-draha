function toc_90_dolava () {
    Rover.MotorRunDual(-255, 255)
    basic.pause(350)
}
function zastav_a_stoj_navzdy () {
    nestoj = false
    Rover.MotorStopAll(MotorActions.Stop)
}
function toc_sa () {
    if ("p" == zoznam_smerov_tocenia[pocet_toceni]) {
        toc_90_doprava()
    }
    if ("l" == zoznam_smerov_tocenia[pocet_toceni]) {
        toc_90_dolava()
    }
    pocet_toceni += 1
    chod_dopredu()
}
function chod_dopredu () {
    Rover.MotorRunDual(255, 255)
}
function toc_90_doprava () {
    Rover.MotorRunDual(255, -255)
    basic.pause(450)
}
let zoznam_smerov_tocenia: string[] = []
let pocet_toceni = 0
let nestoj = false
nestoj = true
pocet_toceni = 0
zoznam_smerov_tocenia = ["p", "l"]
let max_pocet_toceni = zoznam_smerov_tocenia.length
chod_dopredu()
basic.forever(function () {
    if (nestoj) {
        if (Rover.Ultrasonic() < 15) {
            if (pocet_toceni < max_pocet_toceni) {
                toc_sa()
            } else {
                zastav_a_stoj_navzdy()
            }
        }
    }
})
