import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Modal } from 'react-bootstrap';
import { LOCATION_FORM_TABS } from '../../../constants/SideItems.js';
import GeneralForm from './Forms/GeneralForm';
import AddressForm from './Forms/AddressForm';
import OpeningHoursForm from './Forms/OpeningHoursForm';

import '../../../styles/appLayout/ManageAccounts.scss';

const LocationModal = () => {
  const [activeTab, setActiveTab] = useState(LOCATION_FORM_TABS[0]);
  const [showLocationModal, setShowModal] = useState(false);

  const [locationName, setLocationName] = useState('');
  const [locationType, setLocationType] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [wair, setWair] = useState(true);
  const [wpn, setWpn] = useState(true);

  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [others, setOthers] = useState('');
  const [country, setCountry] = useState('');
  const [timeZone, setTimeZone] = useState('');

  const [weekdays, setWeekdays] = useState({
    Sunday: { open: true, from: dayjs(), to: dayjs() },
    Monday: { open: true, from: dayjs(), to: dayjs() },
    Tuesday: { open: true, from: dayjs(), to: dayjs() },
    Wednesday: { open: true, from: dayjs(), to: dayjs() },
    Thursday: { open: true, from: dayjs(), to: dayjs() },
    Friday: { open: true, from: dayjs(), to: dayjs() },
    Saturday: { open: true, from: dayjs(), to: dayjs() }
  });

  const handleToggle = (day) => {
    setWeekdays((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        open: !prevState[day].open
      }
    }));
  };

  const handleTimeChange = (day, field, value) => {
    setWeekdays((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [field]: value
      }
    }));
  };

  const handleLocationSubmit = () => {
    closeLocationModal();
  };

  const closeLocationModal = () => setShowModal(false);
  const openLocationModal = () => setShowModal(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="add-location">
        <button className="clickable-1 btn btn-link" onClick={openLocationModal}>
          ADD LOCATION
        </button>
      </div>
      <Modal size="lg" show={showLocationModal} onHide={closeLocationModal}>
        <Modal.Header closeButton>
          <Modal.Title>Store Location</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <ul className="location-tab-list">
            {LOCATION_FORM_TABS.map(({ label, value, heading }, index) => (
              <li
                key={index}
                className={`location-tab-item ${activeTab?.value === value ? 'active' : ''}`}
                onClick={() => handleTabClick({ value, heading })}>
                {label}
              </li>
            ))}
          </ul>
          <div className="tab-content mt-5 pb-3">
            {activeTab.value === 'general' && (
              <GeneralForm
                locationName={locationName}
                setLocationName={setLocationName}
                locationType={locationType}
                setLocationType={setLocationType}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                wair={wair}
                setWair={setWair}
                wpn={wpn}
                setWpn={setWpn}
              />
            )}
            {activeTab.value === 'address' && (
              <AddressForm
                addressOne={addressOne}
                setAddressOne={setAddressOne}
                addressTwo={addressTwo}
                setAddressTwo={setAddressTwo}
                city={city}
                setCity={setCity}
                postalCode={postalCode}
                setPostalCode={setPostalCode}
                others={others}
                setOthers={setOthers}
                country={country}
                setCountry={setCountry}
                timeZone={timeZone}
                setTimeZone={setTimeZone}
              />
            )}
            {activeTab.value === 'hours' && (
              <OpeningHoursForm
                weekdays={weekdays}
                handleToggle={handleToggle}
                handleTimeChange={handleTimeChange}
              />
            )}
          </div>
          <button className="btn btn-secondary float-end" onClick={handleLocationSubmit}>
            Save
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LocationModal;
