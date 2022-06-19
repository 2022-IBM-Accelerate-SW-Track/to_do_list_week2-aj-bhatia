import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";
import flowers from "../assets/flowers1.jpg";
import flowers1 from "../assets/flowers2.jpg";
import linkedInPic from '../assets/linkedin.png';
import twitterPic from '../assets/twitter.png';
import instagramPic from '../assets/instagram.png';
import githubPic from '../assets/github.png';
import { Card, CardContent, CardActionArea, Typography, CardMedia } from "@mui/material";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ajay Bhatia</div>
            <div className="brief_description">
              <Card variant="outlined" sx={{ maxWidth: 400, borderRadius: "1/50" }}>
                <CardActionArea>
                  <CardMedia
                  component="img"
                  height="140"
                  image={ flowers }
                  />
                  <CardContent>
                    <Typography style={{ fontFamily: "Cedarville Cursive"}}>
                      Work.
                    </Typography>
                    <Typography style={{ fontFamily: "Montserrat", fontSize: "10px" }}>
                      Software Engineering Intern at HPE
                    </Typography>
                    <Typography style={{ fontFamily: "Montserrat", fontSize: "10px" }}>
                      Software Accelerate Participant at IBM
                    </Typography>
                    <Typography style={{ fontFamily: "Montserrat", fontSize: "10px" }}>
                      Studying Computer Science at UC Santa Cruz
                    </Typography>
                    <br></br>
                    <Typography style={{ fontFamily: "Montserrat", fontSize: "10px" }}>
                      I am an aspiring software engineer currently working and learning throug multiple avenues. I would like to work as a full-stack developer but I am very excited to learn about different fields offered in the realm of computer science!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card variant="outlined" sx={{ maxWidth: 400, borderRadius: "1/50" }}>
                <CardActionArea>
                  <CardMedia
                  component="img"
                  height="140"
                  image={ flowers1 }
                  />
                  <CardContent>
                    <Typography style={{ fontFamily: "Cedarville Cursive"}}>
                      Me.
                    </Typography>
                    <Typography style={{ fontFamily: "Montserrat", fontSize: "10px" }}>
                      Clubs: Fish Rap Live! Satire News Paper, UCSC Valorant Team Captain, Guayaki Ambacebador, and CruzHacks Organizer.
                    </Typography>
                    <br></br>
                    <Typography style={{ fontFamily: "Montserrat", fontSize: "10px" }}>
                      Hobbies: Skiing, Running, Building keyboards, Traveling, Cooking, Eating, and Lifting.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <div class="links">
                <a id="linkedIn" class="button" href="https://www.linkedin.com/in/aj-bhatia/"><img class="mediaPic" alt="LinkedIn" src={linkedInPic}/></a>
                <a id="github" class="button" href="https://github.com/aj-bhatia"><img class="mediaPic" alt="GitHub" src={githubPic}/></a>
                <a id="twitter" class="button" href="https://twitter.com/aj__bhatia"><img class="mediaPic" alt="Twitter" src={twitterPic}/></a>
                <a id="instagram" class="button" href="https://www.instagram.com/ajay_bhatiaa/"><img class="mediaPic" alt="Instagram" src={instagramPic}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
