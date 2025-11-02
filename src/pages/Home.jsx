import React from 'react'
import PreHeaderVariantA from '../components/variantA/PreHeaderVariantA'
import HeaderVariantA from '../components/variantA/HeaderVariantA'
import HeroVariantA from '../components/variantA/HeroVariantA'
import CategoriesVariantA from '../components/variantA/CategoriesVariantA'
import EbookVariantA from '../components/variantA/EbookVariantA'
import NewReleaseVariantA from '../components/variantA/NewReleaseVariantA'
import Featuredbook from '../components/variantA/Featuredbook'

export default function Home() {
  return (
    <div>
        <PreHeaderVariantA />
        <HeaderVariantA />
        <HeroVariantA />
        <CategoriesVariantA />
        <EbookVariantA />
        <NewReleaseVariantA />
        <Featuredbook />
    </div>
  )
}
