import { X } from 'lucide-react';

export default function AssetModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="asset-modal glass-card" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close assets modal"><X size={20} /></button>
        <span className="eyebrow">Project Assets</span>
        <h3>{project.title}</h3>
        <p className="asset-intro">Output screenshots and architecture visuals from this project.</p>
        {project.assets.length > 0 ? (
          <div className="asset-grid">
            {project.assets.map((asset, index) => (
              <figure key={asset.src}>
                <a href={asset.src} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} asset ${index + 1}`}>
                  <img src={asset.src} alt={asset.caption || `${project.title} output ${index + 1}`} loading="lazy" />
                </a>
                {asset.caption && <figcaption>{index + 1}. {asset.caption}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <div className="empty-assets">
            <p>No output images are available for this project yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
