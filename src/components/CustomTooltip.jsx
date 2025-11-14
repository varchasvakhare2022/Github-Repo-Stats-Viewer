import React from 'react'

export const CustomTooltip = ({ active, payload, label, isDarkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`p-3 rounded-lg shadow-lg border ${
          isDarkMode
            ? 'bg-slate-800 border-slate-600 text-white'
            : 'bg-white border-gray-200 text-gray-900'
        }`}
        style={{
          boxShadow: isDarkMode
            ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p
          className={`font-semibold mb-1 ${
            isDarkMode ? 'text-slate-200' : 'text-gray-900'
          }`}
        >
          {label}
        </p>
        {payload.map((entry, index) => (
          <p
            key={index}
            className={`text-sm ${
              isDarkMode ? 'text-slate-300' : 'text-gray-700'
            }`}
            style={{ color: entry.color }}
          >
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

