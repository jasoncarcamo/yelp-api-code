import React from 'react';
import "./BusinessList.css";
import Business from '../Business/Business';

class BusinessList extends React.Component{
    render(){

        if(this.props.business){
        return (
            <div className="BusinessList">
                {this.props.business.map(business => {
                   return <Business business={business} key={business.id}/> 
                })}
            </div>
        )
            }
            return <h1>Try typing in a different result!</h1>
    }
}


export default BusinessList;