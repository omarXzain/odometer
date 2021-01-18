import React from 'react';
import './App.css';

function Header(){
    return (
        <header className="App">
        {/* <h1>hellloooo</h1> */}

        </header>
    );
}

class FoodChoice2 extends React.Component{
    constructor(){

        super();
        this.state = {
            counter: "0000"
        };
    }


  //   changeFood(favFood){
  //     this.setState( { food:favFood });
  // }


    changeCounter(omar){
      console.log(document.querySelector('.counter').value);
      let zainCounter=document.querySelector('.counter')
  
        function zeroPad(num, places) {
          var zero = places - num.toString().length + 1;
          return Array(+(zero > 0 && zero)).join("0") + num;
        }
          let currentzainCounter = Number(zainCounter.value);
        
          let test = currentzainCounter+ omar;
          if (test>9999){
            zainCounter.value=0
            zainCounter.value+=test-9999
            zainCounter.value=zeroPad(zainCounter.value, 4)
            
            
          }else{
            zainCounter.value=test
            zainCounter.value=zeroPad(zainCounter.value, 4)
          }
          this.setState({
            counter: zainCounter.value
        })
  
    }


    render(){
        return(
            <>   

                <h2>Odometer Counter</h2>
                <button onClick={ () => this.changeCounter(1)}>Add 1</button>
                <button onClick={ () => this.changeCounter(10)}>Add 10</button>
                <button onClick={ () => this.changeCounter(100)}>Add 100</button>
                <button onClick={ () => this.changeCounter(1000)}>Add 1000</button>
                <input class="counter" value={this.state.counter}></input>
            </>
        );
    }

}


function Main(){
    return (
        <main>
            <div className="App">

                {/* <h1>Hello {courseName}</h1> */}
                <h1>{getH1Name()}</h1>
                {/* <p>Welcome to our awesome Counter!!! </p> */}
              <img width="400px" height="200px" class="koko" src="https://promofeatures.com/img/index/2.gif"></img>
            </div>
        </main>
    )

}


function Footer(props){
    return(
        <footer className="App">
            <p>Copy Right @2021</p>
            <p>{props.trademark}</p>
        </footer>
    )
}

function App() {
    return (
        <>
            <Header />
            <FoodChoice2/>
            <Main />
            <Footer trademark=" All rights reserved @Zain Counter" />
        </>
    );
}


function getH1Name(){
    return "Welcome To Zain Counter";
}


export default App;