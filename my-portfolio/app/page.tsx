'use client'

import React from 'react';
import FloatingArea from '../src/Components/Layout/FloatingArea';
import Footer from '../src/Components/Layout/Footer';
import Hero from '../src/Components/Layout/Hero';
import ScrollProgress from '../src/Components/Layout/ScrollProgress';
import Stars from '../src/Components/Layout/Stars';

export default function Page() {
  return (
    <div>
      <ScrollProgress />
      <Hero />
      <main className={classes.main}>
        <Stars />
        <FloatingArea />
        <Footer />
      </main>
    </div>
  );
}

const classes = {
  main: "relative z-10"
};