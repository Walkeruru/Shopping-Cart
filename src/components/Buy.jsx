import { Text } from "@nextui-org/react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Buy = (props) => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(() => {
            navigate('/')
        }, 3000);
    },[])

    return (
        <div className="App flex items-center justify-center gap-4">
            <Text 
                h1
                size={60}
                css={{
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
            >
                {props.load}
                Thank
            </Text>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
            >
                you
            </Text>
            <Text
                h1
                size={60}
                css={{
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
                weight="bold"
            >
                for checking the web site
            </Text>
        </div>
    )
}

export default Buy