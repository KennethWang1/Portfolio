'use client';

import { useState, useEffect } from 'react';
import Header from '../_components/Header.js';
import Footer from '../_components/Footer.js';

export default function StockTradingAI() {
  const [stats, setStats] = useState(null);

  // Mock data
  const mockStats = {
    netProfit: 12180.25,
    totalCapital: 125000.00,
    lastAction: new Date().toISOString(),
    lastActionType: 'BUY',
    lastActionAmount: 100,
    lastReturn: 245.75,
    lastActionValue:'0.5',
    lastReward:'0.5',
    ticker: 'AAPL',
    lastUpdated: new Date().toISOString(),
    valuesLast30: [120000, 121500, 119800, 122300, 123100, 121900, 124200, 125800, 124500, 126200, 127100, 125900, 128300, 127800, 129200, 128700, 130100, 129600, 131200, 130800, 132400, 131900, 133500, 132800, 134200, 133700, 135100, 134600, 136000, 125000],
    traderLast30: [100000, 101200, 99800, 102100, 102900, 101700, 103800, 105200, 104100, 105900, 106700, 105500, 107800, 107300, 108600, 108100, 109400, 108900, 110600, 110100, 111800, 111300, 113000, 112300, 113700, 113200, 114800, 114300, 115900, 112180.25]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats(mockStats);
    }, 1000);
  }, []);

  if (!stats) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-transparent flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-foreground mx-auto"></div>
            <p className="mt-4 text-green-50/[0.9]">Loading AI Trading Statistics...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-transparent p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-green-50/[0.9] mb-2">Stock Trading AI Dashboard</h1>
            <p className="text-green-50/[0.7]">Performance metrics</p>
            <p className="text-sm text-green-50/[0.5]">Last updated: {new Date(stats.lastUpdated).toLocaleString()}</p>
          </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Capital" value={`$${stats.totalCapital.toLocaleString()}`} color="blue" />
          <StatCard title="Net Profit" value={`$${stats.netProfit.toLocaleString()}`} color="green" />
          <StatCard title="Last Return" value={`$${stats.lastReturn.toLocaleString()}`} color="green" />
          <StatCard title="Last Action" value={stats.lastActionType} color="purple" />
        </div>

        {/* Detailed Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DetailCard title="Trading Information">
            <div className="space-y-3">
              <StatRow label="Last Ticker" value={stats.ticker} color="green" />
              <StatRow label="Last Action Type" value={stats.lastActionType} color="blue" />
              <StatRow label="Last Return" value={`$${stats.lastReturn.toLocaleString()}`} color="green" />
              <StatRow label="Last Action Amount" value={`$${stats.lastActionAmount.toLocaleString()}`} />
            </div>
          </DetailCard>

          <DetailCard title="AI Performance">
            <div className="space-y-3">
              <StatRow label="Total Capital" value={`$${stats.totalCapital.toLocaleString()}`} />
              <StatRow label="Net Profit" value={`$${stats.netProfit.toLocaleString()}`} color="green" />
              <StatRow label="Last Action Value" value={stats.lastActionValue} color="purple" />
              <StatRow label="Last Reward" value={stats.lastReward} color="purple" />
            </div>
          </DetailCard>
        </div>

        {/* Performance Chart */}
        <div className="mb-8">
          <DetailCard title="30-Day Portfolio Performance">
            <PerformanceChart 
              stockValues={stats.valuesLast30} 
              portfolioValues={stats.traderLast30}
            />
          </DetailCard>
        </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

// Helper Components
function StatCard({ title, value, color = "default" }) {
  const colorClasses = {
    blue: "text-blue-400",
    green: "text-green-400", 
    purple: "text-purple-400",
    default: "text-green-50/[0.9]"
  };

  return (
    <div className="bg-blue-950 border-green-100/[0.9] border-1 rounded-md p-6">
      <div className="flex flex-row items-left mb-2">
        <div className="bg-red-500 w-2 h-2 rounded-full mr-1" />
        <div className="bg-green-500 w-2 h-2 rounded-full mr-1" />
        <div className="bg-yellow-500 w-2 h-2 rounded-full" />
      </div>
      <h3 className="text-lg font-semibold text-green-50/[0.7] mb-2">{title}</h3>
      <p className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  );
}

function DetailCard({ title, children }) {
  return (
    <div className="bg-blue-950 border-green-100/[0.9] border-1 rounded-md p-6">
      <div className="flex flex-row items-left mb-4">
        <div className="bg-red-500 w-2 h-2 rounded-full mr-1" />
        <div className="bg-green-500 w-2 h-2 rounded-full mr-1" />
        <div className="bg-yellow-500 w-2 h-2 rounded-full" />
      </div>
      <h3 className="text-xl font-semibold text-green-50/[0.9] mb-4">{title}</h3>
      {children}
    </div>
  );
}

function StatRow({ label, value, color = "default" }) {
  const colorClasses = {
    green: "text-green-400",
    red: "text-red-400", 
    purple: "text-purple-400",
    default: "text-green-50/[0.8]"
  };

  return (
    <div className="flex justify-between">
      <span className="text-green-50/[0.6]">{label}:</span>
      <span className={`font-semibold ${colorClasses[color]}`}>{value}</span>
    </div>
  );
}

function PerformanceChart({ stockValues, portfolioValues }) {
  if (!stockValues.length || !portfolioValues.length) {
    return (
      <div className="h-64 flex items-center justify-center text-green-50/[0.6]">
        No data available for the last 30 days
      </div>
    );
  }

  const chartWidth = 100; // Use percentage-based width
  const chartHeight = 60; // Use percentage-based height
  const padding = 8;

  // Get min/max values for scaling
  const allValues = [...stockValues, ...portfolioValues];
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const valueRange = maxValue - minValue;

  // Create points for both lines
  const stockPoints = stockValues.map((value, index) => {
    const x = padding + (index / (stockValues.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((value - minValue) / valueRange) * (chartHeight - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  const portfolioPoints = portfolioValues.map((value, index) => {
    const x = padding + (index / (portfolioValues.length - 1)) * (chartWidth - 2 * padding);
    const y = chartHeight - padding - ((value - minValue) / valueRange) * (chartHeight - 2 * padding);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="w-full h-full">
      <div className="flex justify-center mb-4">
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-0.5 bg-blue-400 mr-2"></div>
            <span className="text-green-50/[0.8]">Initial Stock Value</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-0.5 bg-green-400 mr-2"></div>
            <span className="text-green-50/[0.8]">Portfolio Value</span>
          </div>
        </div>
      </div>
      
      <div className="w-full h-80">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="8" height="6" patternUnits="userSpaceOnUse">
              <path d={`M 8 0 L 0 0 0 6`} fill="none" stroke="rgba(119,240,127,0.1)" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Y-axis labels */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const value = minValue + ratio * valueRange;
            const y = chartHeight - padding - ratio * (chartHeight - 2 * padding);
            return (
              <text 
                key={ratio} 
                x={padding - 2} 
                y={y + 1} 
                textAnchor="end" 
                className="fill-green-50/[0.6]"
                fontSize="2"
              >
                ${Math.round(value / 1000)}k
              </text>
            );
          })}
          
          {/* X-axis labels */}
          {[0, 7, 14, 21, 29].map((day) => {
            const x = padding + (day / 29) * (chartWidth - 2 * padding);
            return (
              <text 
                key={day} 
                x={x} 
                y={chartHeight - 2} 
                textAnchor="middle" 
                className="fill-green-50/[0.6]"
                fontSize="2"
              >
                {30 - day}d
              </text>
            );
          })}
          
          {/* Stock value line */}
          <polyline
            fill="none"
            stroke="rgb(96, 165, 250)"
            strokeWidth="0.5"
            points={stockPoints}
          />
          
          {/* Portfolio value line */}
          <polyline
            fill="none"
            stroke="rgb(74, 222, 128)"
            strokeWidth="0.5"
            points={portfolioPoints}
          />
        </svg>
      </div>
    </div>
  );
}