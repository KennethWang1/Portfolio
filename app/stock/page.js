'use client';

import { useState, useEffect } from 'react';
import Header from '../_components/Header.js';
import Footer from '../_components/Footer.js';

export default function StockTradingAI() {
  const [stats, setStats] = useState(null);
  const [trades, setTrades] = useState([]);

  // Mock data
  const mockStats = {
    totalTrades: 156,
    successfulTrades: 132,
    failedTrades: 24,
    successRate: 84.6,
    totalProfit: 15420.75,
    totalLoss: -3240.50,
    netProfit: 12180.25,
    averageTradeValue: 2450.00,
    totalCapital: 125000.00,
    currentROI: 9.74,
    lastUpdated: new Date().toISOString()
  };

  const mockTrades = [
    { id: 1, symbol: 'AAPL', action: 'BUY', quantity: 10, price: 175.50, time: '09:30:15', profit: 245.00, status: 'SUCCESS' },
    { id: 2, symbol: 'GOOGL', action: 'SELL', quantity: 5, price: 2680.25, time: '09:31:22', profit: -120.50, status: 'LOSS' },
    { id: 3, symbol: 'MSFT', action: 'BUY', quantity: 15, price: 335.75, time: '09:32:45', profit: 187.25, status: 'SUCCESS' },
    { id: 4, symbol: 'TSLA', action: 'SELL', quantity: 8, price: 245.80, time: '09:33:12', profit: 312.40, status: 'SUCCESS' },
    { id: 5, symbol: 'NVDA', action: 'BUY', quantity: 12, price: 485.60, time: '09:34:08', profit: 425.75, status: 'SUCCESS' },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats(mockStats);
      setTrades(mockTrades);
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
            <p className="text-green-50/[0.7]">Real-time statistics and performance metrics</p>
            <p className="text-sm text-green-50/[0.5]">Last updated: {new Date(stats.lastUpdated).toLocaleString()}</p>
          </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Trades" value={stats.totalTrades} color="blue" />
          <StatCard title="Success Rate" value={`${stats.successRate}%`} color="green" />
          <StatCard title="Net Profit" value={`$${stats.netProfit.toLocaleString()}`} color="green" />
          <StatCard title="ROI" value={`${stats.currentROI}%`} color="purple" />
        </div>

        {/* Detailed Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <DetailCard title="Performance Overview">
            <div className="space-y-3">
              <StatRow label="Successful Trades" value={stats.successfulTrades} color="green" />
              <StatRow label="Failed Trades" value={stats.failedTrades} color="red" />
              <StatRow label="Total Profit" value={`$${stats.totalProfit.toLocaleString()}`} color="green" />
              <StatRow label="Total Loss" value={`$${stats.totalLoss.toLocaleString()}`} color="red" />
              <StatRow label="Average Trade Value" value={`$${stats.averageTradeValue.toLocaleString()}`} />
            </div>
          </DetailCard>

          <DetailCard title="Capital Information">
            <div className="space-y-3">
              <StatRow label="Total Capital" value={`$${stats.totalCapital.toLocaleString()}`} />
              <StatRow label="Current ROI" value={`${stats.currentROI}%`} color="purple" />
              <StatRow label="Net Profit" value={`$${stats.netProfit.toLocaleString()}`} color="green" />
            </div>
            
            {/* Progress bar for success rate */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-green-50/[0.6]">Success Rate</span>
                <span className="text-sm font-semibold text-green-50/[0.8]">{stats.successRate}%</span>
              </div>
              <div className="w-full bg-blue-900 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ width: `${stats.successRate}%` }}
                ></div>
              </div>
            </div>
          </DetailCard>
        </div>

        {/* Recent Trades Table */}
        <DetailCard title="Recent Trades (Today)">
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-blue-900/[0.3]">
                  <th className="px-4 py-2 text-left text-sm font-semibold text-green-50/[0.8]">Symbol</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-green-50/[0.8]">Action</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-green-50/[0.8]">Quantity</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-green-50/[0.8]">Price</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-green-50/[0.8]">Time</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-green-50/[0.8]">Profit/Loss</th>
                  <th className="px-4 py-2 text-left text-sm font-semibold text-green-50/[0.8]">Status</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade) => (
                  <tr key={trade.id} className="border-t border-green-100/[0.2] hover:bg-blue-900/[0.2]">
                    <td className="px-4 py-3 font-semibold text-green-300">{trade.symbol}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        trade.action === 'BUY' ? 'bg-blue-900/[0.5] text-blue-300' : 'bg-orange-900/[0.5] text-orange-300'
                      }`}>
                        {trade.action}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-green-50/[0.8]">{trade.quantity}</td>
                    <td className="px-4 py-3 text-green-50/[0.8]">${trade.price}</td>
                    <td className="px-4 py-3 text-sm text-green-50/[0.6]">{trade.time}</td>
                    <td className="px-4 py-3">
                      <span className={`font-semibold ${trade.profit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        ${trade.profit.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        trade.status === 'SUCCESS' ? 'bg-green-900/[0.5] text-green-300' : 'bg-red-900/[0.5] text-red-300'
                      }`}>
                        {trade.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DetailCard>
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