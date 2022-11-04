import React from 'react'
import { Button, Box } from '@mui/material'

export default function Test() {

    const [statuspages, setStatuspages] = React.useState(null)

  return (
    <div>
        <Button
        onClick={() => setStatuspages(1)}
        >1</Button>


        <Button
        onClick={() => setStatuspages(2)}

        >2</Button>


        <Button
        onClick={() => setStatuspages(3)}

        >3</Button>


        <Button
        onClick={() => setStatuspages(4)}

        >4</Button>


        <Button
        onClick={() => setStatuspages(5)}

        >5</Button>


        <Button
        onClick={() => setStatuspages(6)}

        >6</Button>

        {
            statuspages == 1 && (<Box1/>)
        }
        {
            statuspages == 2 && (<Box2/>)
        }
        {
            statuspages == 3 && (<Box3/>)
        }
        {
            statuspages == 4 && (<Box4/>)
        }
        {
            statuspages == 5 && (<Box5/>)
        }
                {
            statuspages == 6 && (<Box6/>)
        }
    </div>
  )
}

function Box1() {
    return(
        <Box sx={{
            width:'100%'
        }}>
            1
        </Box>
    )
}

function Box2() {
    return(
        <Box sx={{
            width:'100%'
        }}>
            2
        </Box>
    )
}

function Box3() {
    return(
        <Box sx={{
            width:'100%'
        }}>
            3
        </Box>
    )
}

function Box4() {
    return(
        <Box sx={{
            width:'100%'
        }}>
            4
        </Box>
    )
}

function Box5() {
    return(
        <Box sx={{
            width:'100%'
        }}>
            5
        </Box>
    )
}

function Box6() {
    return(
        <Box sx={{
            width:'100%'
        }}>
            5
        </Box>
    )
}
