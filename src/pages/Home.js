import React, { useState, useEffect } from 'react'
import { Button, Tabs, Tab } from 'react-bootstrap'
import './Home.scss'
import Trending from '../components/Trending'
import JumboSearch from '../components/JumboSearch'
import Categories from '../components/Categories'
import firebase, { db } from '../base'
import { useAppContext } from '../libs/contextLib'

export default function Home(props) {
  const { isAuthenticated } = useAppContext()

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return
      }

      try {
        const snapshot = await db.collection('products').get()
        snapshot.forEach((doc) => {

          if (doc.data().points) {
            this.userPoints = doc.data.points
          }
          if (doc.data().tier) {
          }
        })
      } catch (e) {}
    }

    onLoad()
  }, [isAuthenticated])

  function renderUser() {
    return (
      <div>
        <h2>Welcome DJ!</h2>
        <p>Points & Tier level displayed here </p>
      </div>
    )
  }

  function renderDefault() {
    return (
      <div>
        <h2>Join Freebys Today!</h2>
        <p>Get free items exclusively!</p>
        <Button>Learn more</Button>
      </div>
    )
  }

  return (
    <div>
      <main className="main-container">
        <div className="join-freebys">
          {isAuthenticated ? renderUser() : renderDefault()}
        </div>
        <Trending />
        <Categories />
      </main>
    </div>
  )
}
