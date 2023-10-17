import React, {Component} from "react";
//import TutorialDataServise from "..//services/tutorial.services";

export default class AddTutorial extends Component{
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveTutorial.bind(this);
        this.newTutorial = this.newTutorial.bind(this);

        this.state ={
            title: "",
            description:"",
            published: false,

            submitted: false,
        };
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value,

        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value,
        });
    }

    saveTutorial(){
        let data ={
            title: this.state.title,
            description: this.state.description,
            published: false
        };

        TutorialDataService.create(data)
        .then(() =>{
            console.log("Created new item successfully!");
            this.setState({
                submitted: true,
            });
        })
        .catch((e)=>{
            console.log(e);
        });

    }
    newTutorial(){
        this.setState({
            title:"",
            description: "",
            published: false,

            submitted: false,
        });
    }

    render(){
       <div className="sumit-form">
            {this.state.submitted             
             <div>
                <h4>You submitted successfully!</h4>
                <buttom className="bfn-btn-sucsses" onClick={this.newTutorial}>
                    add
                </buttom>
              </div> 
            }
        </div>
    }

}