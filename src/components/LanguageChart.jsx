import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { CustomTooltip } from './CustomTooltip'

const COLORS = [
  '#3b82f6', // blue
  '#10b981', // emerald
  '#f59e0b', // amber
  '#ef4444', // red
  '#8b5cf6', // violet
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#84cc16', // lime
  '#f97316', // orange
  '#6366f1', // indigo
]

export default function LanguageChart({ languages, isDarkMode }) {
  const data = Object.entries(languages)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10)

  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`text-center py-8 rounded-lg ${
          isDarkMode ? 'text-slate-400 bg-slate-800/50' : 'text-gray-500 bg-gray-50'
        }`}
      >
        No language data available
      </motion.div>
    )
  }

  const renderCustomLabel = ({ name, percent }) => {
    if (percent < 0.05) return null
    return `${(percent * 100).toFixed(0)}%`
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`w-full p-6 rounded-lg ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700'
          : 'bg-white border border-gray-200 shadow-sm'
      }`}
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart style={{ backgroundColor: 'transparent' }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            animationDuration={1000}
            animationBegin={0}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                style={{
                  filter: isDarkMode ? 'brightness(1.1)' : 'brightness(1)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Pie>
          <Tooltip
            content={<CustomTooltip isDarkMode={isDarkMode} />}
            cursor={{
              fill: isDarkMode ? 'rgba(148, 163, 184, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              stroke: isDarkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(0, 0, 0, 0.1)',
              strokeWidth: 1,
            }}
          />
          <Legend
            wrapperStyle={{ color: isDarkMode ? '#f1f5f9' : '#0f172a' }}
            formatter={(value) => value}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
