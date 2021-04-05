const Card = ({ title, description, tech }) => (
    <div className="bg-gray-900 min-w-md w-80 h-60 border-2 shadow p-4 rounded-lg">
        <h3 className="text-lg font-semibold uppercase">{title}</h3>
        <h4 className="text-sm text-gray-300 mb-4">Stack: {tech}</h4>
        <p className="text-gray-300">{description}</p>
    </div>
  );
  
  export default Card;