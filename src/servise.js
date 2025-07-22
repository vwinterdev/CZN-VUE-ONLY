import { allVarinats, employersVariants } from './JSONS.js'
import { randomFrom8to9 as r9 } from './utils.js'
import axios from 'axios'
const URL = "https://new.czn-office.ru/api/ankets/saveAnketFormData"

export const sendVote = async (key, name) => {
    const part1 = [r9(),r9(),r9(),0,r9(),r9(),r9(),r9(),r9(),r9(),r9(),0,r9(),1,0,r9(),r9(),r9(),r9(),null]
    const part2 = allVarinats[key] || [1, r(0, 7), [9]]
    const body =  {
        "configId":"167679",
        "email":null,
        "userName": name,
        "regnumber":null,
        "cznName":177752,
        "answers": JSON.stringify([part1, part2]),
    }
    try {
        const response = await axios.post(URL, body)
        console.log('✅ Vote sent successfully:', response.data)
        return response.data
    } catch (error) {
        console.error('❌ Error sending vote:', error)
    }
}


export const sendVoteEmployers = async (key, name) => {
    const part1 = [r9(),r9(),r9(),0,r9(),r9(),r9(),r9(),r9(),r9(),r9(),0,r9(),1,0,r9(),r9(),r9(),r9(),null]
    const part2 = employersVariants[key] || employersVariants['Частная российская до 15 ничего из перечисленного']
    const body =  {
        "configId":"167682",
        "email":null,
        "userName": name,
        "regnumber":null,
        "cznName":177752,
        "answers": JSON.stringify([part1, part2]),
    }
    try {
        const response = await axios.post(URL, body)
        console.log('✅ Vote sent successfully:', response.data)
        return response.data
    } catch (error) {
        console.error('❌ Error sending vote:', error)
    }
}