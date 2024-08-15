from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
import os

@csrf_exempt
def upload_image(request):
    if request.method == 'POST':
        file = request.FILES.get('image')
        if file:
            file_path = default_storage.save(f'images/{file.name}', file)
            file_url = default_storage.url(file_path)
            return JsonResponse({'image': file_url})
        return JsonResponse({'error': 'No image provided'}, status=400)
    return JsonResponse({'error': 'Invalid method'}, status=405)