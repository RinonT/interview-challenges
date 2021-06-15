import './App.css';
import NotificationContainer from './components/blueSection/NotificationContainer';
import SearchInput from './components/blueSection/SearchInput';
import FeelingsContainer from './components/blueSection/FeelingsContainer';
import ExercisesHeading from './components/exercisesComponents/ExercisesHeading';
import ExercisesListContainer from './components/exercisesComponents/ExercisesListContainer';
import FooterNav from './components/footerNavComponents';

function App() {
  return (
    <div className="App">
      <section className="container app_section">
        <NotificationContainer />
        <SearchInput />
        <FeelingsContainer />
      </section>
      <section className="container app_section exercises_section">
        <ExercisesHeading />
        <ExercisesListContainer />
      </section>
      <FooterNav />
    </div>
  );
}

export default App;
