import { Controller, Get, Redirect, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
const axios = require('axios')

const clientID = "d4d4d7944b3ed42ede70"
const clientSecret = "83d406fac72e327de0d8068f412851b81a3543d1"

@Controller('auth')
export class ControllersController {

    @Get()
    @Render('login')
    root(){
        return {message: 'Hello G'}
    }

    @Get('github/callback')
    afterAuthorication(@Req() req: Request, @Res() res: Response){
        const code = req.query.code

        axios({
            method: 'post',
            url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${code}`,
            // Set the content type header, so that we get the response in JSON
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            const accessToken = response.data.access_token
            console.log(accessToken)
            res.redirect(`/auth/profile?access_token=${accessToken}`)
        })
    }

    @Get('profile')
    @Render('profile')
    profile(@Req() req: Request){
        const accessToken = req.query.access_token
        return {token: accessToken}
        
    }
}
