/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Page from '../../components/Page'
import { START_REWARD_AT_BLOCK } from '../../pbr/lib/constants'
import LaunchpadCards from '../Launchpads/components/LaunchpadCards'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Button } from '@material-ui/core'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useNetwork from '../../hooks/useNetwork'
import NetworkSelect from '../../components/TopBar/components/NetworkSelect'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: 300,
    width: '100%',
    padding: 20,
    borderRadius: 30,
    backgroundColor: 'rgba(41, 42, 66, 0.3)',
    border: '1px solid #212121',
    filter: 'drop-shadow(0 0 0.5rem #212121)',
    [theme.breakpoints.down('sm')]: {
      minWidth: 240,
      width: '100%',
    },
  },
  logo: {
    width: 70,
    height: 70,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: 'transparent',
    border: '1px solid #f9f9f9',
    padding: 12,
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      width: 50,
      height: 50,
      marginBottom: 10,
    },
  },

  background: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  divider: {
    width: 130,
    height: 3,
    background: 'linear-gradient(to right, #26e4c8, rgba(0, 0, 0, 0.4))',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
    },
  },
  actionButton: {
    background: `linear-gradient(to bottom,#2336a6,#0f15ff)`,
    color: 'white',
    width: 'fit-content',
    height: 40,
    textTransform: 'none',
    borderRadius: 30,
    fontSize: 15,
    marginRight: 5,
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
    padding: '5px 20px 5px 20px',
    '&:hover': {
      background: 'rgb(0 94 251 / 70%)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'fit-content',
      fontSize: 12,
    },
  },

  headStyle: {
    width: 950,

    paddingTop: 10,
    paddingBottom: 20,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  earn: {
    textAlign: 'center',
    color: '#f9f9f9',
    fontSize: 12,
  },
  title: {
    color: '#e5e5e5',
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'left',
    paddingTop: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22,
    },
  },
  listing: {
    color: '#e5e5e5',
    lineHeight: 3,
  },
}))

const Rules = () => {
  const classes = useStyles()

  return (
    <Page>
      <div className="container ">
        <div className={classes.background}>
          <div className={classes.headStyle}>
            <div>
              <h1 className={classes.title}>FAQs</h1>
              <div className={classes.divider} />
            </div>
            <div className="mt-3">
              <h6 style={{ color: '#DF097C', fontWeight: 700 }}>
                - Staking amount
              </h6>
              <ul className={classes.listing}>
                <li>
                  You need to stake minimum 250 CASHP tokens to staking pool
                  either on pulsechain network.
                </li>

              </ul>
            </div>
            <div className="mt-3">
              <h6 style={{ color: '#DF097C', fontWeight: 700 }}>
                - Participation type
              </h6>
              <ul className={classes.listing}>
                <li>
                  Guaranteed Allocation (Read more at <a style={{ color: "#DF097C" }} target="_blank" href="https://polkabridge.medium.com/polkabridge-announces-new-tier-system-for-launchpad-ido-guaranteed-allocation-93c3b3036ac1">here</a>)
                </li>
                <li>
                  For more details and latest updates you can join our{' '}
                  <a
                    style={{ color: '#DF097C' }}
                    href="https://t.me/polkabridgegroup"
                  >
                    official telegram group.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

const Box = styled.div`
  &.mt-4 {
    margin-top: 40px;
    @media (max-width: 767px) {
      margin-top: 30px;
    }
  }
`
const SpacerRes = styled.div`
  .sc-iCoHVE {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .d-lg-none {
    @media (min-width: 1025px) {
      display: none;
    }
  }
`
export default Rules
