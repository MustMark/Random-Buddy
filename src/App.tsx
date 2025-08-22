"use client"

import { useState } from "react"

interface Person {
  id: string
  name: string
  image?: string
  ig: string
  contact_no: string
  isSelected?: boolean
}

interface Buddy {
  id: number
  personA: Person
  personB: Person
}

const allPersonTeamA: Person[] = [
  { id: "K1", name: "Napat Changpradit (Pu)", image: "../public/picture/kmtil_picture/K1.jpeg", ig: "napat_nc" , contact_no: "(+66) 652377717" },
  { id: "K2", name: "Natnaree Weerakul (Aily)", image: "../public/picture/kmtil_picture/K2.JPG", ig: "-", contact_no: "(+66) 639476222"},
  { id: "K3", name: "Teerasak Jantarovas (Guitar)", image: "../public/picture/kmtil_picture/K3.jpg", ig: "supervolance", contact_no: "(+66) 922278462" },
  { id: "K4", name: "Tamtikorn Kietipungchai (Gan)", image: "../public/picture/kmtil_picture/K4.jpg", ig: "gan_gun112", contact_no: "(+66) 988595020" },
  { id: "K5", name: "Peerawat Ingkhasantatikul (Mark)", image: "../public/picture/kmtil_picture/K5.jpg", ig: "mark_peerawat", contact_no: "(+66) 812895077" },
  { id: "K6", name: "Sukrit Suwanprasert (Phoom)", image: "../public/picture/kmtil_picture/K6.png", ig: "omegaphoom_phoom", contact_no: "(+66) 889196586" },
  { id: "K7", name: "Noppawit Tharakittikirati (Earth)", image: "../public/picture/kmtil_picture/K7.jpg", ig: "prasearth", contact_no: "(+66) 997361781" },
  { id: "K8", name: "Komsanti Bunyaprasop (Four)", image: "../public/picture/kmtil_picture/K8.jpg", ig: "fo_reverrr", contact_no: "(+66) 984642295" },
  { id: "K9", name: "Boonnisa Samlee (Bell)", image: "../public/picture/kmtil_picture/K9.JPG", ig: "nederbelle", contact_no: "(+66) 632318256" },
  { id: "K10", name: "Phojanin Phanbaukaew (Pound)", image: "../public/picture/kmtil_picture/K10.JPG", ig: "jemappellepound", contact_no: "(+66) 993452226" },
  { id: "K11", name: "Arpasiri Kaewsangsri (Yam)", image: "../public/picture/kmtil_picture/K11.jpg", ig: "apsry_", contact_no: "(+66) 640302178" },
  { id: "K12", name: "Methavee Pisitwanichakul (Vava)", image: "../public/picture/kmtil_picture/K12.jpg", ig: "matsur.in", contact_no: "(+66) 956586359" },
  { id: "K13", name: "Thitsanapat Siwarattanan (Tang)", image: "../public/picture/kmtil_picture/K13.png", ig: "ttang.st13", contact_no: "(+66) 965760649" },
  { id: "K14", name: "Woranat Uttachanyakul (Praew)", image: "../public/picture/kmtil_picture/K14.jpg", ig: "fullofwise", contact_no: "(+66) 814861203" },
  { id: "K15", name: "Kanlachan Homsiang (Prabpram)", image: "../public/picture/kmtil_picture/K15.jpg", ig: "-", contact_no: "(+66) 629251216" },
  { id: "K16", name: "Thanakrit Nilsuwanwong (Firm)", image: "../public/picture/kmtil_picture/K16.jpg", ig: "-", contact_no: "(+66) 882814937" },
  { id: "K17", name: "Paspan Nores (Toeyhom)", image: "../public/picture/kmtil_picture/K17.jpg", ig: "-", contact_no: "(+66) 970579451" },
  { id: "K18", name: "Warinladha Chermchan (Dream)", image: "../public/picture/kmtil_picture/K18.jpeg", ig: "-", contact_no: "(+66) 958320550" },
  { id: "K19", name: "Panida Nitjin (Nida)", image: "../public/picture/kmtil_picture/K19.JPG", ig: "-", contact_no: "(+66) 616788839" },
  { id: "K20", name: "Anyamanee Songkittiphong (Namprung)", image: "../public/picture/kmtil_picture/K20.jpg", ig: "-", contact_no: "(+66) 991168746" },
];

const allPersonTeamB: Person[] = [
  { id: "T1", name: "ADRIAN SAMUEL HERNANDEZ ESPIRITU", image: "../public/picture/temasek_picture/T1.jpeg", ig: "-", contact_no: "(+65) 97271875" },
  { id: "T2", name: "ANUMITHA SOMASUNDARAM", image: "../public/picture/temasek_picture/T2.jpeg", ig: "-", contact_no: "(+65) 90121136" },
  { id: "T3", name: "BRYAN OOI WEI JIE", image: "../public/picture/temasek_picture/T3.jpg", ig: "-", contact_no: "(+65) 88205965" },
  { id: "T4", name: "CHAN XI EN CHARLENE", image: "../public/picture/temasek_picture/T4.jpg", ig: "-", contact_no: "(+65) 87166424" },
  { id: "T5", name: "CHENG CHENGHAO", image: "../public/picture/temasek_picture/T5.png", ig: "-", contact_no: "(+65) 87153048" },
  { id: "T6", name: "CHU HONG KAI", image: "../public/picture/temasek_picture/T6.jpeg", ig: "-", contact_no: "(+65) 83325332" },
  { id: "T7", name: "DELYNNA TAN XUAN LIN", image: "../public/picture/temasek_picture/T7.png", ig: "-", contact_no: "(+65) 91905891" },
  { id: "T8", name: "DIVYA ANOOP GANWANI", image: "../public/picture/temasek_picture/T8.jpg", ig: "-", contact_no: "(+65) 88214211" },
  { id: "T9", name: "JOY TEO RU MEI", image: "../public/picture/temasek_picture/T9.jpeg", ig: "-", contact_no: "(+65) 83324501" },
  { id: "T10", name: "JULIAN CHARLES CYRIL COLLEEMALLAY", image: "../public/picture/temasek_picture/T10.jpg", ig: "-", contact_no: "(+65) 81634197" },
  { id: "T11", name: "LEE MAY HUI", image: "../public/picture/temasek_picture/T11.jpg", ig: "-", contact_no: "(+65) 88365960" },
  { id: "T12", name: "LEE SHI YUN EMMA", image: "../public/picture/temasek_picture/T12.jpg", ig: "-", contact_no: "(+65) 86878836" },
  { id: "T13", name: "NG QI WEI RYAN", image: "../public/picture/temasek_picture/T13.png", ig: "-", contact_no: "(+65) 97848915" },
  { id: "T14", name: "ONG I-HO", image: "../public/picture/temasek_picture/T14.jpg", ig: "-", contact_no: "(+65) 89282177" },
  { id: "T15", name: "PEARLYN WEE LI WEN", image: "../public/picture/temasek_picture/T15.jpeg", ig: "-", contact_no: "(+65) 97289133" },
  { id: "T16", name: "RUTH GOH EN QI", image: "../public/picture/temasek_picture/T16.JPG", ig: "-", contact_no: "(+65) 91779713" },
  { id: "T17", name: "SATHIS BABU LAKSHMI PRABHA", image: "../public/picture/temasek_picture/T17.jpeg", ig: "-", contact_no: "(+65) 80340029" },
  { id: "T18", name: "TAN YONG QI ELWIN", image: "../public/picture/temasek_picture/T18.JPG", ig: "-", contact_no: "(+65) 82011331" },
  { id: "T19", name: "VEERAPANDIAN ASVIKA", image: "../public/picture/temasek_picture/T19.png", ig: "-", contact_no: "(+65) 83361467" },
  { id: "T20", name: "ZAINAB MOAZZAM VEHMI", image: "../public/picture/temasek_picture/T20.jpg", ig: "-", contact_no: "(+65) 93891224" },
];

// Can only set randomized order for one team
// Otherwise, it would lock the buddy result
const randomizedOrderteamA: Person[] = [allPersonTeamA[0], allPersonTeamA[5]]
const randomizedOrderteamB: Person[] = []

export default function BuddyRandomizer() {
  const tickSound = new Audio("../public/tick.wav")
  const [teamA, setTeamA] = useState<Person[]>(allPersonTeamA)
  const [teamB, setTeamB] = useState<Person[]>(allPersonTeamB)
  const [selectedBuddy, setSelectedBuddy] = useState<[Person | null, Person | null]>([null, null])
  const [isAnimating, setIsAnimating] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [currentDisplayA, setCurrentDisplayA] = useState<string | undefined>("../public/picture/kmtil_picture/KMITL.png")
  const [currentDisplayB, setCurrentDisplayB] = useState<string | undefined>("../public/picture/temasek_picture/Temasek.png")
  const [buddies, setBuddies] = useState<Buddy[]>([])

  const showBuddyPopup = (teamA: Person, teamB: Person) => {
    setSelectedBuddy([teamA, teamB])
    setShowPopup(true)
  }

  const randomizeBuddies = () => {
    const availableTeamA = teamA.filter((person) => !person.isSelected)
    const availableTeamB = teamB.filter((person) => !person.isSelected)

    if (availableTeamA.length === 0 || availableTeamB.length === 0) {
      alert("No people left to randomize. Please click Reset")
      return
    }

    setIsAnimating(true)
    tickSound.currentTime = 0
    tickSound.play().catch(() => {})

    let intervalA: NodeJS.Timeout
    let intervalB: NodeJS.Timeout
    let speedA = 50
    let speedB = 50
    let countA = 0
    let countB = 0
    const maxCount = 100

    if (buddies.length < randomizedOrderteamA.length){
      var finalPersonA = randomizedOrderteamA[buddies.length]
    }
    else {
      var finalPersonA = availableTeamA[Math.floor(Math.random() * availableTeamA.length)]
    }
    
    if (buddies.length < randomizedOrderteamB.length){
      var finalPersonB = randomizedOrderteamB[buddies.length]
    }
    else {
      var finalPersonB = availableTeamB[Math.floor(Math.random() * availableTeamB.length)]
    }

    const animateTeamA = () => {
      intervalA = setInterval(() => {
        const randomPerson = availableTeamA[Math.floor(Math.random() * availableTeamA.length)]
        setCurrentDisplayA(randomPerson.image)
        countA++

        if (countA > maxCount * 0.7) {
          speedA += 5
          clearInterval(intervalA)
          setTimeout(animateTeamA, speedA)
        }

        if (countA >= maxCount) {
          clearInterval(intervalA)
          setCurrentDisplayA(finalPersonA.image)
        }
      }, speedA)
    }

    const animateTeamB = () => {
      intervalB = setInterval(() => {
        const randomPerson = availableTeamB[Math.floor(Math.random() * availableTeamB.length)]
        setCurrentDisplayB(randomPerson.image)
        countB++

        if (countB > maxCount * 0.7) {
          speedB += 20
          clearInterval(intervalB)
          setTimeout(animateTeamB, speedB)
        }

        if (countB >= maxCount) {
          clearInterval(intervalB)
          setCurrentDisplayB(finalPersonB.image)
        }
      }, speedB)
    }

    animateTeamA()
    animateTeamB()

    setTimeout(() => {
      clearInterval(intervalA)
      clearInterval(intervalB)

      setTeamA((prev) => prev.map((person) => (person.id === finalPersonA.id ? { ...person, isSelected: true } : person)))
      setTeamB((prev) => prev.map((person) => (person.id === finalPersonB.id ? { ...person, isSelected: true } : person)))

      const newBuddy: Buddy = {
        id: buddies.length + 1,
        personA: finalPersonA,
        personB: finalPersonB,
      }
      setBuddies((prev) => [...prev, newBuddy])
      setSelectedBuddy([finalPersonA, finalPersonB])
      setCurrentDisplayA(finalPersonA.image)
      setCurrentDisplayB(finalPersonB.image)
      setIsAnimating(false)
      setShowPopup(true)
    }, 3000)
  }

  const resetAll = () => {
    setTeamA(allPersonTeamA.map((person) => ({ ...person, isSelected: false })))
    setTeamB(allPersonTeamB.map((person) => ({ ...person, isSelected: false })))
    setSelectedBuddy([null, null])
    setShowPopup(false)
    setCurrentDisplayA("../public/picture/kmtil_picture/KMITL.png")
    setCurrentDisplayB("../public/picture/temasek_picture/Temasek.png")
    setBuddies([])
  }

  const SlotMachine = ({ team, color, currentDisplay }: { team: string; color: string; currentDisplay: string | undefined }) => (
    <div className="flex flex-col items-center">
      <div className={`w-40 h-40 rounded-full border-8 ${color} relative overflow-hidden bg-white shadow-lg`}>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img src={currentDisplay} className="w-full h-full object-cover rounded-full"></img>
        </div>
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-full h-full ${color.replace("border-", "bg-").replace("-500", "-100")} opacity-30`}
              style={{
                transform: `rotate(${i * 45}deg)`,
                clipPath: "polygon(50% 50%, 50% 0%, 85.4% 14.6%)",
              }}
            />
          ))}
        </div>
      </div>
      <p className="mt-4 font-semibold text-gray-700 text-lg">{team}</p>
    </div>
  )

  const PersonCard = ({ person, teamColor }: { person: Person; teamColor: string }) => (
    <div
      className={`w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-lg border-4 ${teamColor} bg-white rounded-lg`}
    >
      <div className="text-center pb-4 p-6">
        <div className="w-64 h-64 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-100 to-rose-100 flex items-center justify-center text-lg font-semibold">
          <img src={person.image} className="w-full h-full object-cover rounded-full"></img>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{person.name}</h3>
        <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm inline-block">{person.id[0] == 'K' ? "KMITL" : "Temasek Polytechnic"}</div>
      </div>
      <div className="space-y-4 px-6 pb-6">
        <div>
          <h4 className="font-semibold text-sm text-gray-600 mb-2"><span className="font-bold">IG :</span> {person.ig}</h4>
          <h4 className="font-semibold text-sm text-gray-600 mb-2"><span className="font-bold">Contact Number :</span>  {person.contact_no}</h4>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen min-w-screen">
      <div className="h-screen w-screen flex flex-col">
        {/* Header */}
        <div className="text-center py-6 bg-white/80 backdrop-blur-sm border-b">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
              Buddy Randomizer
            </h1>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 flex">
          {/* Team A List */}
          <div className="w-1/4 bg-orange-50/50 p-4 overflow-y-auto">
            <div className="text-center mb-4">
              <div className="bg-orange-100 text-orange-800 border border-orange-200 px-3 py-2 rounded-full inline-block">
                KMITL <span className="font-extrabold">({teamA.filter((p) => !p.isSelected).length}/{teamA.length})</span>
              </div>
            </div>
            <div className="space-y-2">
              {teamA.map((person) => (
                <div
                  key={person.id}
                  className={`border-l-4 border-l-orange-500 bg-white rounded-lg p-3 transition-all duration-300 ${
                    person.isSelected ? "opacity-50 bg-gray-100" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        person.isSelected ? "bg-gray-200 text-gray-500" : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      <img src={person.image} className="w-full h-full object-cover rounded-full"></img>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm truncate ${person.isSelected ? "text-gray-500" : "text-gray-800"}`}
                      >
                        {person.name}
                      </h3>
                      <p className={`text-xs truncate ${person.isSelected ? "text-gray-400" : "text-gray-600"}`}>
                        <span className="font-medium mr-4">IG : {person.ig}</span>
                        <span className="font-medium">Contact Number : {person.contact_no}</span>
                      </p>
                    </div>
                    {person.isSelected && <div className="bg-gray-200 text-gray-500 px-1 py-0.5 rounded text-xs">Selected</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slot Machine */}
          <div className="flex-1 flex flex-col items-center p-8">
            <div className="flex justify-center items-center gap-16 mb-8">
              <SlotMachine team="KMITL" color="border-orange-500" currentDisplay={currentDisplayA} />
              <div className="text-center">
                {buddies.length >= 0 && (
                  <div className="bg-green-100 text-green-800 border border-green-200 text-lg px-4 py-2 rounded-full inline-block">
                    Buddy#{buddies.length}
                  </div>
                )}
              </div>
              <SlotMachine team="Temasek Polytechnic" color="border-rose-500" currentDisplay={currentDisplayB} />
            </div>

            <div className="text-center space-x-4">
              <button
                onClick={randomizeBuddies}
                disabled={isAnimating}
                className="bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg disabled:opacity-50"
              >
                {isAnimating ? "Randomizing..." : "Randomize Buddies"}
              </button>

              <button
                onClick={resetAll}
                className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Reset
              </button>
            </div>

            {/* Buddy History */}
            {buddies.length > 0 && (
              <div className="mt-8 w-full max-w-2xl">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Buddy List</h3>
                <div className="space-y-2">
                  {buddies.map((buddy) => (
                    <button key={buddy.id} className="border-2 border-green-200 bg-green-50 rounded-lg p-3" onClick={() => showBuddyPopup(buddy.personA, buddy.personB)}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="bg-green-100 text-green-800 border border-green-200 px-2 py-1 rounded-full text-sm">
                            Buddy #{buddy.id}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-800 text-xs flex items-center justify-center font-semibold">
                              <img src={buddy.personA.image} className="w-full h-full object-cover rounded-full"></img>
                            </div>
                            <span className="font-semibold text-gray-800 text-xs">{buddy.personA.name}</span>
                          </div>
                          <span className="text-gray-400 font-bold">and</span>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-800 text-xs flex items-center justify-center font-semibold">
                              <img src={buddy.personB.image} className="w-full h-full object-cover rounded-full"></img>
                            </div>
                            <span className="font-semibold text-gray-800 text-xs">{buddy.personB.name}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Team B List */}
          <div className="w-1/4 bg-rose-50/50 p-4 overflow-y-auto">
            <div className="text-center mb-4">
              <div className="bg-rose-100 text-rose-800 border border-rose-200 px-3 py-2 rounded-full inline-block">
                Temasek Polytechnic <span className="font-extrabold">({teamB.filter((p) => !p.isSelected).length}/{teamB.length})</span>
              </div>
            </div>
            <div className="space-y-2">
              {teamB.map((person) => (
                <div
                  key={person.id}
                  className={`border-l-4 border-l-rose-500 bg-white rounded-lg p-3 transition-all duration-300 ${
                    person.isSelected ? "opacity-50 bg-gray-100" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        person.isSelected ? "bg-gray-200 text-gray-500" : "bg-rose-100 text-rose-800"
                      }`}
                    >
                      <img src={person.image} className="w-full h-full object-cover rounded-full"></img>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm truncate ${person.isSelected ? "text-gray-500" : "text-gray-800"}`}
                      >
                        {person.name}
                      </h3>
                      <p className={`text-xs truncate ${person.isSelected ? "text-gray-400" : "text-gray-600"}`}>
                        <span className="font-medium mr-4">IG : {person.ig}</span>
                        <span className="font-medium">Contact Number : {person.contact_no}</span>
                      </p>
                    </div>
                    {person.isSelected && <div className="bg-gray-200 text-gray-500 px-1 py-0.5 rounded text-xs">Selected</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            <div className="text-center text-2xl font-bold text-gray-800 mb-4">Buddy#{buddies.length} Selected!</div>

            {selectedBuddy[0] && selectedBuddy[1] && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="text-center">
                  </div>
                  <PersonCard person={selectedBuddy[0]} teamColor="border-orange-500" />
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                  </div>
                  <PersonCard person={selectedBuddy[1]} teamColor="border-rose-500" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
