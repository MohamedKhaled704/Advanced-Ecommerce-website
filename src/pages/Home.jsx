import React from 'react'
import PreHeaderVariantA from '../components/variantA/PreHeaderVariantA'
import HeaderVariantA from '../components/variantA/HeaderVariantA'
import HeroVariantA from '../components/variantA/HeroVariantA'
import CategoriesVariantA from '../components/variantA/CategoriesVariantA'
import EbookVariantA from '../components/variantA/EbookVariantA'
import NewReleaseVariantA from '../components/variantA/NewReleaseVariantA'
import Featuredbook from '../components/variantA/Featuredbook'
import Offer from '../components/variantA/Offer'
import Subscribe from '../components/variantA/Subscribe'
import Blogs from '../components/variantA/Blogs'
import FooterVariantA from '../components/variantA/FooterVariantA'
import Signup from './Signup'

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
        <Offer />
        <Subscribe />
        <Blogs />
        <FooterVariantA />
    </div>
  )
}
