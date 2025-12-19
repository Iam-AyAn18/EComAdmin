import './StatCard.css';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = 'primary' }) => {
  return (
    <div className={`stat-card stat-card-${color}`}>
      <div className="stat-card-content">
        <div className="stat-card-header">
          <span className="stat-card-title">{title}</span>
          <div className={`stat-card-icon stat-card-icon-${color}`}>
            <Icon size={24} />
          </div>
        </div>
        <div className="stat-card-body">
          <h3 className="stat-card-value">{value}</h3>
          {trend && (
            <div className={`stat-card-trend ${trend === 'up' ? 'trend-up' : 'trend-down'}`}>
              <span>{trend === 'up' ? '↑' : '↓'} {trendValue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
