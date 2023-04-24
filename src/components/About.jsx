import { Grid, Image, Text} from "@nextui-org/react"
import '../App.css'
const About = () => {
    return (
        <div className="App">
            <Text h2 css={{textAlign:'center'}}>About us</Text>
        <Grid.Container gap={2} justify="center">
            <Grid xs={12} md={6}>
                <Image src='/images/about.webp' alt='phones' containerCss={{borderRadius:'32px'}}/>
            </Grid>
            <Grid xs={12} md={6} alignItems="center">
                <Text h4 css={{textAlign:'center'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum ultrices neque, nec tempus tellus lacinia hendrerit. Ut commodo nisi quis feugiat aliquet. Praesent vel sapien quis dolor pharetra placerat ac nec orci. Nam lectus justo, vulputate nec interdum vitae, semper sagittis arcu. Nullam aliquet vel velit ut volutpat. Proin sed neque lacus. Sed ac nisi vel felis maximus euismod. Aenean ornare posuere pulvinar. Curabitur in mi velit. Donec mollis purus nisi.
                Phasellus id purus vitae augue hendrerit interdum quis in sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus nec lorem urna. In ligula ex, faucibus eget iaculis a, tincidunt a est. Donec id ultrices felis. Nunc elit neque, pulvinar non nulla sed, egestas efficitur tellus. Duis pretium metus mauris, et tempus nibh placerat ac. In et massa sed erat eleifend dapibus a vitae ligula. </Text>
            </Grid>
        </Grid.Container>
        </div>
    )
}

export default About