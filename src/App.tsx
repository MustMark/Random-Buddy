"use client"

import { useState } from "react"

interface Person {
  id: string
  name: string
  image?: string
  ig: string
  isSelected?: boolean
}

interface Buddy {
  id: number
  personA: Person
  personB: Person
}

const initialTeamA: Person[] = [
  { id: "K1", name: "Napat Changpradit (Pu)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K2", name: "Natnaree Weerakul (Aily)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K3", name: "Teerasak Jantarovas (Guitar)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K4", name: "Tamtikorn Kietipungchai (Gan)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K5", name: "Peerawat Ingkhasantatikul (Mark)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K6", name: "Sukrit Suwanprasert (Phoom)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K7", name: "Noppawit Tharakittikirati (Earth)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K8", name: "Komsanti Bunyaprasop (Four)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K9", name: "Boonnisa Samlee (Bell)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K10", name: "Phojanin Phanbaukaew (Pound)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K11", name: "Arpasiri Kaewsangsri (Yam)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K12", name: "Methavee Pisitwanichakul (Vava)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K13", name: "Thitsanapat Siwarattanan (Tang)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K14", name: "Woranat Uttachanyakul (Praew)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K15", name: "Kanlachan Homsiang (Prabpram)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K16", name: "Thanakrit Nilsuwanwong (Firm)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K17", name: "Paspan Nores (Toeyhom)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K18", name: "Warinladha Chermchan (Dream)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K19", name: "Panida Nitjin (Nida)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "K20", name: "Anyamanee Songkittiphong (Namprung)", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
];

const initialTeamB: Person[] = [
  { id: "T1", name: "ADRIAN SAMUEL HERNANDEZ ESPIRITU", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T2", name: "ANUMITHA SOMASUNDARAM", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T3", name: "BRYAN OOI WEI JIE", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T4", name: "CHAN XI EN CHARLENE", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T5", name: "CHENG CHENGHAO", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T6", name: "CHU HONG KAI", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T7", name: "DELYNNA TAN XUAN LIN", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T8", name: "DIVYA ANOOP GANWANI", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T9", name: "JOY TEO RU MEI", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T10", name: "JULIAN CHARLES CYRIL COLLEEMALLAY", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T11", name: "LEE MAY HUI", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T12", name: "LEE SHI YUN EMMA", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T13", name: "NG QI WEI RYAN", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T14", name: "ONG I-HO", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T15", name: "PEARLYN WEE LI WEN", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T16", name: "RUTH GOH EN QI", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T17", name: "SATHIS BABU LAKSHMI PRABHA", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T18", name: "TAN YONG QI ELWIN", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T19", name: "VEERAPANDIAN ASVIKA", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
  { id: "T20", name: "ZAINAB MOAZZAM VEHMI", image: "/placeholder.svg?height=100&width=100", ig: "mark_peerawat" },
];

export default function BuddyRandomizer() {
  const [teamA, setTeamA] = useState<Person[]>(initialTeamA)
  const [teamB, setTeamB] = useState<Person[]>(initialTeamB)
  const [selectedBuddy, setSelectedBuddy] = useState<[Person | null, Person | null]>([null, null])
  const [isAnimating, setIsAnimating] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [currentDisplayA, setCurrentDisplayA] = useState<string>("KMITL")
  const [currentDisplayB, setCurrentDisplayB] = useState<string>("Temasek Polytechnic")
  const [buddies, setBuddies] = useState<Buddy[]>([])

  const randomizeBuddies = () => {
    const availableTeamA = teamA.filter((person) => !person.isSelected)
    const availableTeamB = teamB.filter((person) => !person.isSelected)

    if (availableTeamA.length === 0 || availableTeamB.length === 0) {
      alert("No people left to randomize. Please click Reset")
      return
    }

    setIsAnimating(true)

    let intervalA: NodeJS.Timeout
    let intervalB: NodeJS.Timeout
    let speedA = 50
    let speedB = 50
    let countA = 0
    let countB = 0
    const maxCount = 40

    const finalPersonA = availableTeamA[Math.floor(Math.random() * availableTeamA.length)]
    const finalPersonB = availableTeamB[Math.floor(Math.random() * availableTeamB.length)]

    const animateTeamA = () => {
      intervalA = setInterval(() => {
        const randomPerson = availableTeamA[Math.floor(Math.random() * availableTeamA.length)]
        setCurrentDisplayA(randomPerson.name)
        countA++

        if (countA > maxCount * 0.7) {
          speedA += 20
          clearInterval(intervalA)
          setTimeout(animateTeamA, speedA)
        }

        if (countA >= maxCount) {
          clearInterval(intervalA)
          setCurrentDisplayA(finalPersonA.name)
        }
      }, speedA)
    }

    const animateTeamB = () => {
      intervalB = setInterval(() => {
        const randomPerson = availableTeamB[Math.floor(Math.random() * availableTeamB.length)]
        setCurrentDisplayB(randomPerson.name)
        countB++

        if (countB > maxCount * 0.7) {
          speedB += 20
          clearInterval(intervalB)
          setTimeout(animateTeamB, speedB)
        }

        if (countB >= maxCount) {
          clearInterval(intervalB)
          setCurrentDisplayB(finalPersonB.name)
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
      setCurrentDisplayA(finalPersonA.name)
      setCurrentDisplayB(finalPersonB.name)
      setIsAnimating(false)
      setShowPopup(true)
    }, 3000)
  }

  const resetAll = () => {
    setTeamA(initialTeamA.map((person) => ({ ...person, isSelected: false })))
    setTeamB(initialTeamB.map((person) => ({ ...person, isSelected: false })))
    setSelectedBuddy([null, null])
    setShowPopup(false)
    setCurrentDisplayA("KMITL")
    setCurrentDisplayB("Temasek Polytechnic")
    setBuddies([])
  }

  const SlotMachine = ({ team, color, currentDisplay }: { team: string; color: string; currentDisplay: string }) => (
    <div className="flex flex-col items-center">
      <div className={`w-40 h-40 rounded-full border-8 ${color} relative overflow-hidden bg-white shadow-lg`}>
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            className={`w-32 h-32 rounded-full ${color.replace("border-", "bg-").replace("-500", "-50")} flex items-center justify-center border-2 ${color.replace("border-", "border-").replace("-500", "-200")}`}
          >
            <span className={`text-center font-bold text-sm leading-tight ${isAnimating ? "animate-pulse" : ""}`}>
              {currentDisplay}
            </span>
          </div>
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
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-lg font-semibold">
          {person.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{person.name}</h3>
        <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm inline-block">{person.id[0] == 'K' ? "KMITL" : "Temasek Polytechnic"}</div>
      </div>
      <div className="space-y-4 px-6 pb-6">
        <div>
          <h4 className="font-semibold text-sm text-gray-600 mb-2">IG : {person.ig}</h4>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="h-screen w-screen flex flex-col">
        {/* Header */}
        <div className="text-center py-6 bg-white/80 backdrop-blur-sm border-b">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Buddy Randomizer
            </h1>
          </div>
        </div>

        {/* Main Content - Horizontal Layout */}
        <div className="flex-1 flex">
          {/* Left Team List */}
          <div className="w-1/4 bg-blue-50/50 p-4 overflow-y-auto">
            <div className="text-center mb-4">
              <div className="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-2 rounded-full inline-block">
                KMITL <span className="font-extrabold">({teamA.filter((p) => !p.isSelected).length}/{teamA.length})</span>
              </div>
            </div>
            <div className="space-y-2">
              {teamA.map((person) => (
                <div
                  key={person.id}
                  className={`border-l-4 border-l-blue-500 bg-white rounded-lg p-3 transition-all duration-300 ${
                    person.isSelected ? "opacity-50 bg-gray-100" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        person.isSelected ? "bg-gray-200 text-gray-500" : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm truncate ${person.isSelected ? "text-gray-500" : "text-gray-800"}`}
                      >
                        {person.name}
                      </h3>
                      <p className={`text-xs truncate ${person.isSelected ? "text-gray-400" : "text-gray-600"}`}>
                        <span className="font-medium">IG :</span> {person.ig}
                      </p>
                    </div>
                    {person.isSelected && <div className="bg-gray-200 text-gray-500 px-1 py-0.5 rounded text-xs">Selected</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center - Slot Machines and Controls */}
          <div className="flex-1 flex flex-col items-center p-8">
            <div className="flex justify-center items-center gap-16 mb-8">
              <SlotMachine team="KMITL" color="border-blue-500" currentDisplay={currentDisplayA} />
              <div className="text-center">
                {buddies.length >= 0 && (
                  <div className="bg-green-100 text-green-800 border border-green-200 text-lg px-4 py-2 rounded-full inline-block">
                    Buddy#{buddies.length + 1}
                  </div>
                )}
              </div>
              <SlotMachine team="Temasek Polytechnic" color="border-purple-500" currentDisplay={currentDisplayB} />
            </div>

            <div className="text-center space-x-4">
              <button
                onClick={randomizeBuddies}
                disabled={isAnimating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg disabled:opacity-50"
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
                    <div key={buddy.id} className="border-2 border-green-200 bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="bg-green-100 text-green-800 border border-green-200 px-2 py-1 rounded-full text-sm">
                            Buddy #{buddy.id}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 text-xs flex items-center justify-center font-semibold">
                              {buddy.personA.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="font-semibold text-gray-800 text-xs">{buddy.personA.name}</span>
                          </div>
                          <span className="text-gray-400 font-bold">and</span>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-800 text-xs flex items-center justify-center font-semibold">
                              {buddy.personB.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>
                            <span className="font-semibold text-gray-800 text-xs">{buddy.personB.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Team List */}
          <div className="w-1/4 bg-purple-50/50 p-4 overflow-y-auto">
            <div className="text-center mb-4">
              <div className="bg-purple-100 text-purple-800 border border-purple-200 px-3 py-2 rounded-full inline-block">
                Temasek Polytechnic <span className="font-extrabold">({teamB.filter((p) => !p.isSelected).length}/{teamB.length})</span>
              </div>
            </div>
            <div className="space-y-2">
              {teamB.map((person) => (
                <div
                  key={person.id}
                  className={`border-l-4 border-l-purple-500 bg-white rounded-lg p-3 transition-all duration-300 ${
                    person.isSelected ? "opacity-50 bg-gray-100" : "hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                        person.isSelected ? "bg-gray-200 text-gray-500" : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-sm truncate ${person.isSelected ? "text-gray-500" : "text-gray-800"}`}
                      >
                        {person.name}
                      </h3>
                      <p className={`text-xs truncate ${person.isSelected ? "text-gray-400" : "text-gray-600"}`}>
                        <span className="font-medium">IG :</span> {person.ig}
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
                  <PersonCard person={selectedBuddy[0]} teamColor="border-blue-500" />
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                  </div>
                  <PersonCard person={selectedBuddy[1]} teamColor="border-purple-500" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
