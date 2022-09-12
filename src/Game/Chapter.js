import React, {useEffect} from 'react';
import classes from "./startGame.module.css";
import {NavLink} from "react-router-dom";


const Chapter = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <div className={classes.backGround}>
            <div>
                <div>
                    <img className={classes.gamePhoto1} src={props.photo}/>
                </div>
                <div className={classes.gameTextPadding}>
                    <h2>{props.text}</h2>
                </div>
            </div>
            <div className={classes.grid} >
            <div className={classes.buttonLeft01}>
                {props.step1 !== null ?
                    <NavLink to={"/game/" + props.step1}
                             className={navData => navData.isActive ? classes.active : classes.item}>
                        <h3>{props.choice1}</h3></NavLink> : <NavLink onClick={handleClick} to={"/game/" + props.step1}>{props.choice1}</NavLink>}
            </div>
            <div className={classes.buttonLeft02}>
                {props.step2 !== null ?
                    <NavLink to={"/game/" + props.step2}
                             className={navData => navData.isActive ? classes.active : classes.item}>
                        <h3>{props.choice2}</h3></NavLink> : <NavLink onClick={handleClick} to={"/game/" + props.step2}>{props.choice2}</NavLink> }
            </div>
            </div>

            <div className={classes.buttonLeft04}>
                {props.step4 !== null  ?
                    <NavLink to={"/game/" + props.step4}
                             className={navData => navData.isActive ? classes.active : classes.item}>
                        <h3>{props.choice4}</h3></NavLink> : <NavLink onClick={handleClick} to={"/game/" + props.step4}>{props.choice4}</NavLink>  }
            </div>

            <div className={classes.buttonLeft03}>
                <NavLink to={"/" + props.step3}
                         className={navData => navData.isActive ? classes.active : classes.item}><h3>{props.choice3}</h3></NavLink>
            </div>


        </div>
    )
}

export default Chapter;