import React from 'react';
import "../Css/Dashboard.css"

import $ from "jquery"
import Navbar from './Navbar';
const Dashboard = () => {
  var graph = (function () {
    var urgentTitle = "Urgent",
      $graph = $('.graph'),
      $barContainer = $graph.find('.graph-bars'),
      $markers = $('.markers'),
      $graphTitles = $('.graph-titles'),
      max = null,
      limit = null;
    var init = function (data) {
      max = getMaxValue(data);
      limit = max + Math.ceil(max * 0.05);
      $barContainer.empty();
      $markers.empty();
      $graphTitles.empty();
      $('#urgent-title').text(urgentTitle);

      setMarkers($markers, limit);
      if (data.length) buildTeamRows($barContainer, $graphTitles, data, limit);
      else buildUserRows($barContainer, $graphTitles, data, limit);
    };

    // return a values percentage in relation to the limit
    var getPercentage = function (value, limit) {
      return value / limit * 100 + "%";
    };

    var getMaxValue = function (data) {
      var largest = 0;
      var sum = 0;
      if (data.length) {
        for (let x = 0; x < data.length; x++) {
          sum = data[x].active + data[x].newCount + data[x].newFromBatch;
          if (sum > largest) {
            largest = sum;
          }
        }
      } else {
        largest = Math.max(data.active, data.newCount, data.newFromBatch);
      }
      return largest;
    };

    var setMarkers = function ($selector, limit) {
      var increment = limit / 5;
      var value = 0;
      var values = [];
      var leftOffset = 0;
      // Create array of marker values
      while (value < limit) {
        values.push(Math.round(value));
        value += increment;
      }
      values.push(limit);
      for (var x = 0; x < values.length; x++) {
        var $markerTmpl = $('<div className="marker"><span className="marker-number"></span></div>');
        leftOffset = getPercentage(values[x], limit);
        $markerTmpl.css({ 'left': leftOffset }).find('.marker-number').text(values[x]);
        $selector.append($markerTmpl);
      }
      $selector.addClass('loaded');
    };

    //Build each individual graph based on selector, data, and max value
    var buildTeamRows = function ($barSelector, $titleSelector, data, limit) {
      // var percentage;
      // Loop through data
      for (var x = 0; x < data.length; x++) {
        var titleClass = null;
        var titleCount = 0;
        var $graphBar = $('<div className="graph-bar"></div>')
          .attr('id', 'userGraph-' + data[x].userId);
        $barSelector.append($graphBar);
        // Render each fragment
        renderFragment($graphBar, 'urgent', data[x].urgent, limit);
        renderFragment($graphBar, 'active', data[x].active - data[x].urgent, limit);
        renderFragment($graphBar, 'newCount', data[x].newCount, limit);
        renderFragment($graphBar, 'newFromBatch', data[x].newFromBatch, limit);

        // Calculate largest fragment value
        var largest = 0;
        $.each(data[x], function (index, value) {
          if ($.isNumeric(value)) {
            if (value > largest) {
              largest = value;
              titleClass = index;
              titleCount = value;
            }
          }
        });
        // If Active is greatest value, Check if urgent portion of active is greater than active
        if (titleClass === 'active' && data[x].urgent >= (data[x].active - data[x].urgent)) {
          titleClass = 'urgent';
          titleCount = data[x].urgent;
        }
        // Render row meta-data
        var $titleSet = $('<div className="graph-title"><div className="graph-title-name"></div><div className="graph-title-count"></div></div>');
        $titleSet.find('.graph-title-name').text(data[x].userName);
        $titleSet.find('.graph-title-count').addClass(titleClass).text(titleCount);
        $titleSelector.append($titleSet);
      }
    };

    var renderFragment = function ($selector, type, value, limit) {
      var $rowFragmentTmpl = $('<div className="graph-bar-fragment"></div>');
      var percentage = getPercentage(value, limit);
      $rowFragmentTmpl.attr('data-value', value);
      $selector.append($rowFragmentTmpl.addClass(type));
      setTimeout(function () {
        $rowFragmentTmpl.css({ 'width': percentage });
      }, 1);
    };

    var buildUserRows = function ($barSelector, $titleSelector, data, limit) {
      renderUserRow($barSelector, $titleSelector, 'urgent', data.urgent, limit, urgentTitle);
      renderUserRow($barSelector, $titleSelector, 'active', data.active, limit, 'Active');
      renderUserRow($barSelector, $titleSelector, 'newCount', data.newCount, limit, 'New');
      renderUserRow($barSelector, $titleSelector, 'newFromBatch', data.newFromBatch, limit, 'New From Batch');
    };

    var renderUserRow = function ($barSelector, $titleSelector, type, value, limit, title) {
      var percentage = getPercentage(value, limit);
      var $graphBar = $('<div className="graph-bar graph-bar-single"></div>').attr({ 'id': 'userGraph-' + type, 'data-value': value });
      $barSelector.append($graphBar);
      setTimeout(function () {
        $graphBar.css({ 'width': percentage }).addClass(type);
      }, 1);

      var $titleSet = $('<div className="graph-title"><div className="graph-title-name"></div><div className="graph-title-count"></div></div>');
      $titleSet.find('.graph-title-name').text(title);
      $titleSet.find('.graph-title-count').addClass(type).text(value);
      $titleSelector.append($titleSet);
    };

    return {
      init: init
    }

  })();


  // Document ready

  $(function () {
    // Dummy Data
    var dataSet = [
      {
        active: 5,
        newCount: 4,
        newFromBatch: 40,
        urgent: 1,
        userId: "molly",
        userName: "Molly"
      },
      {
        active: 21,
        newCount: 2,
        newFromBatch: 5,
        urgent: 10,
        userId: "jack",
        userName: "Jack"
      },
      {
        active: 25,
        newCount: 4,
        newFromBatch: 3,
        urgent: 20,
        userId: "tracy",
        userName: "Tracy"
      },
      {
        active: 10,
        newCount: 24,
        newFromBatch: 4,
        urgent: 2,
        userId: "nolan",
        userName: "Nolan"
      },
    ];

    var dataSingle = {
      active: 25,
      newCount: 4,
      newFromBatch: 3,
      urgent: 20,
      userId: "ryan",
      userName: "Ryan Scofield"
    };

    // Initialize Graph
    graph.init(dataSet);

    $('#teamGraph').on('click', function (e) {
      graph.init(dataSet);
    });

    $('#userGraph').on('click', function (e) {
      graph.init(dataSingle);
    });
  });
  return (
    <section >
      <Navbar />
      <div className="container">
        <div className="graph-container">
          <div className="graph-titles">
            {/* <!-- Populated --> */}
          </div>
          <div className="graph">

            <div className="graph-bars">
              {/* <!-- Populated --> */}
            </div>

            <div className="markers">
              {/* <!-- Populated --> */}
            </div>
          </div>
          <div className="graph-key">
            <div className="graph-key-item">
              <span className="graph-key-dot urgent"></span><span id="urgent-title">Urgent</span>
            </div>
            <div className="graph-key-item">
              <span className="graph-key-dot active"></span><span>Active</span>
            </div>
            <div className="graph-key-item">
              <span className="graph-key-dot newCount"></span><span>New</span>
            </div>
            <div className="graph-key-item">
              <span className="graph-key-dot newFromBatch"></span><span>New From Batch</span>
            </div>
          </div>
        </div>
        <button id="teamGraph">Team Graph</button>
        <button id="userGraph">User Graph</button>
      </div>
    </section>

  )
}

export default Dashboard