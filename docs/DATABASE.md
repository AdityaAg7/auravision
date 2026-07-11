## DATABASE SCHEMA

## Tables

### 👤 Users Table Schema

| Column Name | Data Type | Key / Constraint | Description |
| :--- | :--- | :--- | :--- |
| 🆔 **`id`** | `UUID` | `PRIMARY KEY` | Unique identifier for each user (linked to Supabase Auth) |
| ✉️ **`email`** | `VARCHAR` | `NOT NULL` | The user's email address |
| 📛 **`full_name`** | `VARCHAR` | | The user's first and last name |
| ⏱️ **`created_at`** | `TIMESTAMP`| `DEFAULT NOW()` | Timestamp when the user account was created |
| ⏱️ **`updated_at`** | `TIMESTAMP`| `DEFAULT NOW()` | Timestamp when the user profile was last updated |

---

### 📦 Products Table Schema

| Column Name | Data Type | Key / Constraint | Description |
| :--- | :--- | :--- | :--- |
| 🆔 **`id`** | `UUID` | `PRIMARY KEY` | Unique identifier for each product |
| 👤 **`user_id`** | `UUID` | `FOREIGN KEY` | Links to the owner of the product (`users.id`) |
| 🪑 **`product_name`** | `VARCHAR` | `NOT NULL` | Name of the furniture piece |
| 📝 **`description`** | `TEXT` | | Detailed description of the product |
| 📐 **`length_cm`** | `DECIMAL` | | Length of the furniture in centimeters |
| 📐 **`width_cm`** | `DECIMAL` | | Width of the furniture in centimeters |
| 📐 **`height_cm`** | `DECIMAL` | | Height of the furniture in centimeters |
| 🪵 **`material`** | `VARCHAR` | | Material type (e.g., Oak, Leather, Velvet) |
| 🎨 **`color`** | `VARCHAR` | | Color of the item |
| 🚦 **`status`** | `VARCHAR` | `DEFAULT 'pending'` | Current status: `pending`, `processing`, `ready`, `failed` |
| 🖼️ **`image_paths`** | `TEXT[]` | | Array of uploaded source image URLs |
| 🤖 **`glb_file_path`** | `VARCHAR` | | Storage path/URL to the generated GLB 3D file |
| 🤖 **`usdz_file_path`** | `VARCHAR` | | Storage path/URL to the generated USDZ 3D file |
| 🔑 **`share_token`** | `VARCHAR` | `UNIQUE` | Unique token used for generating secure view links |
| 🔗 **`share_link`** | `VARCHAR` | | Full shareable web URL for the product |
| ⏱️ **`created_at`** | `TIMESTAMP`| `DEFAULT NOW()` | Timestamp when the product record was created |
| ⏱️ **`updated_at`** | `TIMESTAMP`| `DEFAULT NOW()` | Timestamp when the product record was last updated |



## Storage Buckets

### product-images
Stores uploaded product images (public).

### generated-models
Stores generated GLB and USDZ files (public).

## Row Level Security (RLS)

All tables have RLS enabled.
Users can only see/modify their own data.