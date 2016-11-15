// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
    kaboom: require("../assets/kaboom.png"),
    internet: require("../assets/internet.jpg"),
    bugs: require("../assets/bugs.jpg"),
    chunk: require("../assets/chunk.png"),
    data1: require("../assets/data1.png"),
    data2: require("../assets/data2.png"),
    tz: require("../assets/tz.jpg"),
    cursor: require("../assets/cursor.png"),
    idea: require("../assets/idea.jpg"),
    thanks: require("../assets/thanks.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Working with large data sets
            </Heading>
            <Heading size={1} fit caps>
              Guy Huynh @rickshawhobo
            </Heading>

          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

        <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
            Let's say you have a table with 2 million rows
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

            <CodePane
              lang="javascript"
              source={require("raw!../assets/deck.example")}
              margin="20px"
                      width="2000"

            />
          </Slide>


                  <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

        <Image src={images.kaboom.replace("/", "")} margin="0px auto 40px" height="293px"/>
        <Heading size={2}  textColor="primary" textFont="primary">
              KA-BOOOOM!
    </Heading>
    </Slide>

          <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.internet.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2}  textColor="primary" textFont="primary">
          *click* *click*
          </Heading>
          </Slide>


          <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.chunk.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2}  textColor="primary" textFont="primary">
              Now you're a pro
  </Heading>
      </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <CodePane
      lang="javascript"
      source={require("raw!../assets/2.php")}
      margin="20px"
      width="2000"

          />

          <Appear fid="1">
          <CodePane
      lang="javascript"
      source={require("raw!../assets/4.php")}
      margin="20px"
      width="2000"

          />
          </Appear>

          </Slide>



          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <CodePane
      lang="javascript"
      source={require("raw!../assets/3.php")}
      margin="20px"
      width="2000"

          />
              <Appear fid="1">

          <CodePane
      lang="javascript"
      source={require("raw!../assets/5.php")}
      margin="20px"
      width="2000"

          />
              </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.bugs.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2}  textColor="primary" textFont="primary">
          Bugs. Gotta catch em all
      </Heading>
      </Slide>




      <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">

          <CodePane
      lang="javascript"
      source={require("raw!../assets/4.php")}
      margin="20px"
      width="2000"

          />

          <Appear fid="1">
          <CodePane
      lang="javascript"
      source={require("raw!../assets/5.php")}
      margin="20px"
      width="2000"

          />
          </Appear>

          </Slide>


          <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.data1.replace("/", "")} margin="0px auto 40px" width="800px" />
          <Heading size={2}  textColor="primary" textFont="primary">
              Perfect
      </Heading>
      </Slide>

          <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.data2.replace("/", "")} margin="0px auto 40px" width="800px" />
          <Heading size={2}  textColor="primary" textFont="primary">
          Not so great
          </Heading>
          </Slide>


      <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.tz.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2}  textColor="primary" textFont="primary">
              NOOOOO!
  </Heading>
      </Slide>

      <Slide transition={["zoom", "fade"]} bgColor="primary" >

      <CodePane
      lang="javascript"
      source={require("raw!../assets/6.php")}
      margin="20px"
      width="2000"

          />

          <Appear fid="1">
          <CodePane
      lang="javascript"
      source={require("raw!../assets/7.php")}
      margin="20px"
      width="2000"

          />
          </Appear>

          </Slide>



          <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.cursor.replace("/", "")} margin="0px auto 40px" width="800px" />
          <Heading size={2}  textColor="primary" textFont="primary">
              That sounds great
      </Heading>
      </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" >

          <CodePane
      lang="javascript"
      source={require("raw!../assets/8.php")}
      margin="20px"
      width="2000"

          />

          <Appear fid="1">
          <CodePane
      lang="javascript"
      source={require("raw!../assets/9.php")}
      margin="20px"
      width="2000"

          />
          </Appear>

          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">

          <Image src={images.kaboom.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2}  textColor="primary" textFont="primary">
          Not again...
          </Heading>
          </Slide>


      <Slide transition={["zoom", "fade"]} bgColor="primary" >

          <CodePane
      lang="javascript"
      source={require("raw!../assets/10.php")}
      margin="20px"
      width="2000"

          />



          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" >



          <CodePane
      lang="javascript"
      source={require("raw!../assets/11.php")}
      margin="20px"
      width="2000"

          />


    <Appear fid="1">
          <CodePane
      lang="javascript"
      source={require("raw!../assets/12.php")}
      margin="20px"
      width="2000"

          />
          </Appear>

          </Slide>





          <Slide transition={["slide"]} bgColor="black" >

          <Image src={images.idea.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2}  textColor="primary" textFont="primary">
              Can we do better?
      </Heading>
      </Slide>

      <Slide transition={["zoom", "fade"]} bgColor="primary" >

          <CodePane
      lang="javascript"
      source={require("raw!../assets/13.php")}
      margin="20px"
      width="2000"

          />



          </Slide>


          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
          <Heading caps  size={1} textColor="primary">
          To recap
      </Heading>
      <List>
      <Appear><ListItem><strike>chunk()</strike> Bad!</ListItem></Appear>
      <Appear><ListItem>chunkById() - OK! (no ORDER, LIMIT CLAUSE, no filter by ID)</ListItem></Appear>
      <Appear><ListItem><strike>cursor() with buffer on</strike> - Kaboom</ListItem></Appear>
      <Appear><ListItem>cursor() with buffer off - OK (no inner SQL)</ListItem></Appear>
      <Appear><ListItem>select ids first with raw sql, then use whereIn() </ListItem></Appear>
      <Appear><ListItem>And...</ListItem></Appear>
      </List>


      </Slide>


      <Slide transition={["slide"]} bgColor="tertiary" >

          <Image src={images.thanks.replace("/", "")} margin="0px auto 40px" width="400px" />
          <Heading size={2}  textColor="primary" textFont="primary">
              Thanks
      </Heading>
          https://github.com/rickshawhobo/presentation
      </Slide>


        </Deck>
      </Spectacle>
    );
  }
}
