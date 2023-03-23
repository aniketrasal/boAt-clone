import { Box, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const Search = () => {
  const [text,setText] =useState("")
  console.log("text",text);
  return (
    <Box>
         <Input border={"0px solid "} outline={"none"} fontSize={"18px"} width={"65%"} value={text} placeholder={"Search......"}   onChange={(e) => setText(e.target.value)} />

    </Box>
  )
}

export default Search