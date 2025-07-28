import React from "react"

const Card3 = () => {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-br from-purple-100 to-white rounded-2xl shadow-lg border-2 border-purple-300 p-6 text-center">
      <h2 className="text-2xl font-bold text-purple-700 mb-2">You're Invited!</h2>
      <p className="text-lg text-gray-700 mb-4">Join us for a special celebration</p>
      <div className="bg-white rounded-xl shadow p-4 mb-4">
        <p className="text-md text-gray-800 font-semibold">Birthday Party for Raj</p>
        <p className="text-sm text-gray-600 mt-1"> Monday, February 9, 2026</p>
        <p className="text-sm text-gray-600">6:00 PM - 10:00 PM</p>
        <p className="text-sm text-gray-600 mt-1">Venue: 123 Celebration Avenue, City</p>
      </div>hello
      <p className="text-gray-600 mb-6">We hope you can join us for an evening of fun, food, and festivities!</p>
      <button className="mt-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full shadow hover:bg-purple-700 transition">RSVP Now</button>
    </div>
  );
};

export default Card3;
