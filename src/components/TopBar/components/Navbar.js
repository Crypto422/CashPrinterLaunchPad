/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined'
import TouchAppOutlined from '@material-ui/icons/TouchAppOutlined'
import CategoryIcon from '@material-ui/icons/Category'

import { EqualizerOutlined } from '@material-ui/icons'
import DotCircle from './DotCircle'
import AccountButton from './AccountButton'
import useNetwork from '../../../hooks/useNetwork'
import { Link } from 'react-router-dom'
import NetworkSelect from './NetworkSelect'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBarBackground: {
    boxShadow: "none",
    backgroundColor: "#100525",
    display: "flex",
    alignItems: "center",
  },
  menuButton: {
    textTransform: "none",
  },
  title: {
    fontWeight: 600,
    fontSize: 24,
  },
  iconText: {
    fontSize: 15,
  },
  icon: {},

  sectionDesktop: {
    marginLeft: 40,
    marginRight: 40,
    [theme.breakpoints.down("md")]: {
      marginLeft: 5,
      marginRight: 5,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sectionMobile: {
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  row1: {
    display: "flex",
    width: "100%",
    alignItems: "center",
  },

  home: {
    "text-decoration": "none",
    color: "black",
    cursor: "pointer",
    marginRight: 5,
    marginLeft: 5,
  },
  nav: {
    marginRight: 15,
  },
  menuIcon: {
    color: "#212121",
  },
  list: {
    width: "250px",
    height: "100%",
    backgroundColor: "transparent",
    color: "#f9f9f9",
  },
  fullList: {
    width: "auto",
  },
  menuTitleMobile: {
    paddingLeft: 25,
    fontWeight: 500,
    verticalAlign: "baseline",
    fontFamily: "New Rocker, cursive",
    textAlign: "left",
    fontSize: 16,
  },
  navbarItemsDesktop: {
    paddingRight: 10,
    fontWeight: 400,
    lineHeight: "34px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.2vw",
    color: "#e5e5e5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 7,
  },
  navbarItemsDesktopActive: {
    paddingRight: 10,
    fontWeight: 500,
    lineHeight: "34px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 14px 0px",
    cursor: "pointer",
    fontSize: "1.2vw",
    color: "#55ff71",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 7,
  },
  navbarItemsMobileActive: {
    paddingRight: 10,
    fontWeight: 500,
    lineHeight: "45px",
    verticalAlign: "baseline",
    letterSpacing: "-1px",
    margin: 0,
    padding: "9px 0px 0px",
    cursor: "pointer",
    fontSize: "6.2vw",
    color: "#55ff71",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 7,
  },
  navbarButton: {
    backgroundColor: "#f9f9f9",
    color: "#c1c6ff",
    borderRadius: 10,
    height: 35,
    marginRight: 40,
    padding: 20,
    fontSize: 14,
    fontWeight: 700,
    textTransform: "none",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.7)",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      marginLeft: 15,
      width: 150,
    },
  },
  mobileButton: {
    borderRadius: "50px",
    background: `linear-gradient(to bottom,#3e76d5, #0c3aa1)`,
    lineHeight: "24px",
    verticalAlign: "baseline",
    letterSpacing: "-0.8px",
    margin: 0,
    color: "#ffffff",
    padding: "5px 15px 5px 15px",
    fontWeight: 600,
  },
  leftMargin: {
    marginLeft: 159,
    [theme.breakpoints.down("lg")]: {
      marginLeft: 100,
    },
  },
  numbers: {
    color: "#26e4c8",
    fontSize: 26,
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  network: {
    display: "flex",
    marginLeft: 20,
    alignItems: "center",
    border: "0.5px solid #919191",
    borderRadius: 20,
    padding: 4,
    paddingLeft: 6,
    paddingRight: 10,
    letterSpacing: 0.4,
    // cursor: "pointer",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
    [theme.breakpoints.down("sm")]: {
      width: 140,
    },
  },
  networkIcon: {
    width: 30,
    height: "auto",
  },
  logo: {
    height: 90,
    width: 90,
    [theme.breakpoints.down("sm")]: {
      height: 30,
      width: "fit-content",
    },
  },
  list: {
    paddingTop: 20,
    width: "250px",
    borderLeft: "5px solid pink",
    borderColor: "#3A1242",
    // borderColor: "#220c3d",
    height: "100%",
    backgroundColor: "#100525",
  },
}));

const Navbar = () => {
  const classes = useStyles()

  const [state, setState] = React.useState({
    right: false,
  })

  const [alertObject, showAlert] = React.useState({
    status: false,
    message: '',
  })

  const [accountDialog, setAccountDialog] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open })
  }

  const handleClose = () => {
    showAlert({ status: false, message: '' })
  }

  const { chainId, status } = useNetwork()

  useEffect(() => {
    // console.log('useNetwork:  network id', chainId)
    // console.log('useNetwork: status', status)
    if (status === 'network changing') {
      var result = window.confirm('Do you want reload the page ?')
      if (result) {
        window.location.reload()
      } else {
        console.log('closed')
      }
    }
  }, [chainId])

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            name: 'Stake',
            link: 'https://google.com/',
            id: 'staking',
            icon: <EqualizerOutlined />,
          },
          {
            name: 'Farm',
            link: 'https://google.com/',
            id: 'intro',
            icon: <TouchAppOutlined />,
          },
          {
            name: 'Launchpad',
            link: 'https://google.com/',
            id: 'characters',
            icon: <PeopleAltOutlined />,
          },
          {},
        ].map((tab, index) => (
          <ListItem button key={tab.name} onClick={toggleDrawer(anchor, false)}>
            <a href={tab.link}>
              <ListItemText
                primary={tab.name}
                className={classes.menuTitleMobile}
              />
            </a>
          </ListItem>
        ))}
        <Divider />
        <ListItem button style={{ marginLeft: 20 }}>
          <AccountButton onWalletClick={() => setAccountDialog(true)} />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div style={{ marginBottom: 50 }}>
      {/* <AccountDialog
        open={accountDialog}
        handleClose={() => setAccountDialog(false)}
      /> */}
      <AppBar
        color="transparent"
        position="fixed"
        className={classes.appBarBackground}
      >
        <Toolbar className={classes.sectionDesktop}>
          <Link to='/'>
            <Avatar
              variant="square"
              src="img/logo-white.png"
              className={classes.logo}
            /></Link>

          <div className="d-flex justify-content-end">
            <div>
              <a href="/" className={classes.navbarItemsDesktopActive} style={{ fontSize: '30px' }}>
                Cash&nbsp;Printer
              </a>
            </div>
          </div>

          <div className={classes.leftMargin} />

          <div className="d-flex justify-content-end">
            <div>
              <a href="https://google.com" className={classes.navbarItemsDesktop}>
                Stake <DotCircle active={true} />
              </a>
            </div>
          </div>
          <div>
            <a
              href="https://google.com"
              target="_blank"
              rel="noreferrer"
              className={classes.navbarItemsDesktop}
            >
              Farm
              <DotCircle />
            </a>
          </div>
          <div>
            <a
              href="https://google.com"
              target="_blank"
              className={classes.navbarItemsDesktopActive}
            >
              Launchpad <DotCircle />
            </a>
          </div>
          <div className={classes.grow} />
         
          <div style={{ paddingRight: 10 }}></div>
          <AccountButton onWalletClick={() => setAccountDialog(true)} />
        </Toolbar>

        <Toolbar className={classes.sectionMobile}>
          <div className="d-flex justify-content-center align-items-center">

            <Link to='/'>
              <Avatar
                variant="square"
                src="img/logo-white.png"
                style={{ height: 38, width: 38 }}
              /></Link>
            {/* <div >
              <NetworkSelect selectedNetwork={chainId} />
            </div> */}
          </div>

          <div className="d-flex justify-content-end">
            <div>
              <a href="/" className={classes.navbarItemsMobileActive}>
                Cash&nbsp;Printer
              </a>
            </div>
          </div>

          <div>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <IconButton
                  aria-label="Menu"
                  aria-haspopup="true"
                  className={classes.menuIcon}
                  onClick={toggleDrawer(anchor, true)}
                >
                  <MenuIcon style={{ color: '#ffffff' }} />
                </IconButton>

                <SwipeableDrawer
                  anchor={anchor}
                  disableSwipeToOpen={false}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                  classes={{ paper: classes.appBarBackground }}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
