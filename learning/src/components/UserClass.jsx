import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "",
                location : "",
                avatar : "",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch(`https://api.github.com/users/AgrawalAman02`);
        const json = await data.json();

        this.setState({
            userInfo : json,
        });

        console.log(json);
        

    }

    render(){
        const {name,location,avatar_url ,bio} = this.state.userInfo;
        return <div className="user-card">
            <img src={avatar_url } alt="" />
            <h2>Name :{name}</h2>
            <h4>Location :{location}</h4>
            <p>Bio : {bio}</p>
            

        </div>
    }
}

export default UserClass;