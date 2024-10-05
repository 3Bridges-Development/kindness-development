import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Outlet } from "react-router-dom";
import UseContentful from './Hooks/use-contentful';

const query = `
query {  
aboutPageCollection{
    items{
      aboutMission,
      theCenterQuoteAndText,
      theCenterAndQuoteImage{
        title,
        description,
        url,
        width,
        height
      }
      aboutGalleryCollection{items{
        title,
        description,
        url,
        width,
        height
      }},
      socialMediaLinks,
      aboutUsGeneralInfo,
      phoneNumber
    }
  },  
  servicesPageCollection{
    items{
      vision,
      enrollmentEligibility
    }
  }, 
  programsOnServicesPageCollection{
    items{
      programsAndEnrollment
    }
  },
  academyFutureInnovationsCollection{items{
    futureInnovations
  }},
  academyProgramsCollection{items{
    academyPrograms
  }},
  howIsAPersonReferredCollection{items{
    referredInfo
  }},
  visionOnServicesPageCollection{
    items{
      vission
    }
  },
  donationPageCollection{
    items{
      donationPageInfo
    }
  }
}
`

function App() {
  let { data, errors } = UseContentful(query);

  if (errors)
    return (
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span></span>;

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Header />
        <Outlet context={data} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
