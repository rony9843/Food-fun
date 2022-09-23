import Button from "@mui/material/Button";
import React, { useState } from "react";
import styled from "styled-components";

export default function Login() {
  // ^ for username and password
  const [username, setUsername] = useState("");
  const [userpass, setUserpass] = useState("");

  // ^for submit button
  const submitBtn = () => {
    console.log(`this is username ${username} and pass ${userpass}`);
  };

  return (
    <LoginPageStyle>
      <div className="inputGroupStyle">
        <div>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            class="form-control px-2"
            id="exampleInputEmail1"
            placeholder="username"
            aria-describedby="emailHelp"
          />
        </div>
        <div>
          <input
            onChange={(e) => setUserpass(e.target.value)}
            value={userpass}
            type="password"
            class="form-control px-2"
            placeholder="password"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="d-flex loginBtn">
          <Button
            onClick={() => submitBtn()}
            className="mainloginBtn"
            variant="contained"
          >
            Log in
          </Button>
        </div>
      </div>
      <div className="navText p-2">
        <div class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa,
          similique minus, architecto voluptatibus hic odio ut eligendi alias
          adipisicsa, si milique minus,
        </div>
        <div class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa,
          similique minus, architecto voluptatibus hic odio ut eligendi alias
          adipisicing elit.
        </div>
        <div class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsa,
          similique minus, architecto voluptatibus hic odio ut eligendi alias
        </div>
      </div>
    </LoginPageStyle>
  );
}

const LoginPageStyle = styled.div`
  background-image: url("https://i.ibb.co/kX1jQnk/Mask-Group-2-2x.png");
  background-repeat: no-repeat, repeat;
  height: 100vh;
  background-color: #cccccc; /* Used if the image is unavailable */

  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  display: flex;
  align-items: center;

  .inputGroupStyle {
    margin: 0px auto;
    margin-top: -45px;
  }
  .inputGroupStyle input {
    border: 3px solid #fe653a;
    width: 400px;
    margin: 10px;
    border-radius: 30px;
    padding: 5px;
  }

  .inputGroupStyle input:nth-child(3) {
    border: 3px solid #fe653a;
    width: 400px;
    margin: 10px;
    border-radius: 30px;
    padding: 5px;
  }
  .loginBtn {
    justify-content: flex-end;
  }
  .mainloginBtn {
    border-radius: 30px;
    margin-right: 10px;
    box-shadow: none;
    background-color: #fe653a;
  }
  .mainloginBtn:hover {
    background-color: #481905;
  }
  .navText {
    height: 100px;
    background-color: #2a0e02;
    width: 100%;
    position: fixed;
    bottom: -27px;
    border-radius: 50px 50px 0px 0px;
    color: #fe643a;
    font-size: 11px;
  }

  .navText div {
    margin: 0px auto;
    display: flex;
    justify-content: space-around;
  }

  @media screen and (max-width: 480px) {
    .inputGroupStyle input {
      width: auto;
    }
    .navText {
      font-size: 9px;
    }
    .navText div:nth-child(2),
    .navText div:nth-child(3) {
      display: none;
    }
    .navText {
      border-radius: 0px;
    }
  }
`;
