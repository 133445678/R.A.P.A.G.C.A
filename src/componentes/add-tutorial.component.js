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
        return (
            <div className="sumit-form">
                 {this.state.submitted ?
                  <div>
                    <h4>You submitted successfully!</h4>
                    <button className="bfn-btn-sucsses" onClick={this.newTutorial}>
                        add
                    </button>
                  </div> 
                } 
            </div>
        ):(
            <div>
                <div className="from-group">
                    <label htmlFor="title">title</label>
                    <input
                     type="text"
                     className="form-control"
                     id="title"
                     required
                     value={this.state.title}
                     onChange={this.onChangeTitle}
                     name="title"
                    />
                </div>
            </div>
        )
    }
}