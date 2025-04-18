import { useState } from 'react'

import '../App.css'
import ProjectList from '../components/ProjectList'

import CategoryFilter from '../components/CategoryFilter';
import WelcomeBand from '../components/WelcomeBand';
import CartSummary from '../components/CartSummary';


function ProjectPage() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    return(
        <>
    <div className="container">
        <CartSummary />
        <WelcomeBand />

      <div className="row">
        <div className="col-md-3"></div>
        <CategoryFilter 
        selectedCategories= {selectedCategories} 
        onCheckboxChange={setSelectedCategories} 
        />
      </div>
      <div className="col-md-9"></div>
      <ProjectList selectedCategories={selectedCategories}/>
    </div>
      
      
      
      {/* <CookieConsent>This website uses cookies to enhance the user experience. </CookieConsent> */}
      {/* <Fingerprint /> */}
    </>
    )
}
export default ProjectPage;