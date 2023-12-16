
import React from "react"
import {glConfig} from "../../../config"
import {
  Box,
  Button,
  Avatar,
  Container,
  DialogTitle,
  DialogContent,
  DialogActions,
  CardHeader,
  LinearProgress,
} from "@mui/material"
import {
  Icon,
  Font,
  notify,
  usePwaDispatch,
  usePwaSelect,
  selectCore,
} from "../../../core"
import {
  firebaseSignin,
  InputEmail,
  InputPassword,
  selectDisplay,
} from "../../../core"

export function MembersOnly() {
  const dispatch = usePwaDispatch()
  const core = usePwaSelect(selectCore)
  const display = usePwaSelect(selectDisplay)
  const [email, setEmail] = React.useState<string>("fragensieoliver@gmail.com")
  const [password, setPassword] = React.useState<string>("")
  const {authing} = core
  let isBig = false
  if (display) isBig = !display.mobile

  const validate = () => {
    if (email !== "" && password !== ""){
      dispatch(firebaseSignin(email, password))
    }else{
      dispatch(notify(
        "FB 101",
        "success", 
        `Keep trying.`
      ))
    }
  }
  const {passwordOnly} = glConfig

  return (<>
        <Container maxWidth="xs">
          <DialogTitle>
                <CardHeader 
                  avatar={<Avatar src={"/jpg/153920249.jpg"} />}
                  title={<Font variant="title">
                            Frag Oliver
                        </Font>}
                />
              </DialogTitle>

              {authing ? <>
                <LinearProgress /> 
              </> :  <>
              
              <DialogContent>

                { !passwordOnly ? <Box sx={{my:2}}>
                  <InputEmail onChange={setEmail} />
                </Box> : null}
                
                <Box sx={{my:1}}>
                    <InputPassword autoFocus onChange={setPassword}/>
                  </Box>
              </DialogContent>

              <DialogActions>
                <Button
                  sx={{mx:2}}
                  className="enterable"
                  color="primary"
                  variant="outlined"
                  onClick={validate}>
                    <Font variant="small">
                      Weiter
                    </Font>
                    <Box sx={{ml:2, mt:0.5}}>
                      <Icon icon="signin" />
                    </Box>
                </Button>
              </DialogActions>
            </>}
           </Container>
        </>
  )
}

/*
  <pre>{JSON.stringify(signinOpen, null, 2)}</pre>
  action={<IconButton
                    sx={{m:1}}
                    onClick={() => {
                      dispatch(setCoreKey("signinOpen", false))
                    }}>
                    <Icon icon={"close"} color="primary"/>
                  </IconButton>}
*/