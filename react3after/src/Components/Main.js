import React, {Component} from 'react';
import data from '../data'
import './Main.css'

// This needs a handleNext() 


export default class Main extends Component {
    constructor(){
        super()
        this.state = {
        i: 0,
     
    }
    
}

handlePrevious(){
    if(this.state.i>0){
    this.setState({i: this.state.i - 1})
}else{
    this.setState({i: 24})  
}
}

handleNext(){
    if(this.state.i<24){
        this.setState({i: this.state.i + 1 })
    }else{
        this.setState({i: 0})
    }

}




render(){
    return(
<div className= 'background---Component'>
    <div className= 'main-box---Component'>
            <div className = 'count---Component'>    
                <div>{`${this.state.i + 1}/25`}</div>
            </div>
            <div className = 'fn---Component'>
                <div>{data[this.state.i].name.first} {data[this.state.i].name.last}</div>
            </div>
            <div className= 'from---Component' >    
                <div>From: {data[this.state.i].city}, {data[this.state.i].country}</div>
                <div>Job Title: {data[this.state.i].title}</div>
                <div>Employer: {data[this.state.i].employer}</div>
            </div>
            <div className= 'movies---Component' >
                <div >Favorite Movies:</div>
            
                <ol>1: {data[this.state.i].favoriteMovies[0]}</ol>
                <ol>2: {data[this.state.i].favoriteMovies[1]}</ol>
                <ol>3: {data[this.state.i].favoriteMovies[2]}</ol>
            </div>     
    </div>
    <div className= 'under-mainbox---Component'>
                <button className= 'noborderbtn---Component' onClick = {() => this.handlePrevious()}> &lt; Previous </button>
                    <div className= 'middle---Component'>
                        <button className= 'button---Component'>Edit</button>
                        <button className= 'button---Component'>Delete</button>
                        <button className= 'button---Component'>New</button>
                    </div>
                <button className= 'noborderbtn---Component' onClick = {() => this.handleNext()}> Next &gt; </button>
    </div>  
</div>      
    )
}
}